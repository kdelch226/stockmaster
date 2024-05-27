import { Injectable } from '@angular/core';
import { Commande } from '../model/commande';
import { ProductService } from '../../core/services/product.service';
import { ClientService } from '../../clients/service/client.service';
import { CommandeItem } from '../model/commandeItem';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { CommandeBackend } from '../model/commandeBackend';
import { Produit } from '../../core/model/produit';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private produitlist: ProductService, private http: HttpClient) { }


  private apiUrl = 'http://localhost:3000/api/commande';


  getCommande(): Observable<Commande[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(allCommandes => {
        return allCommandes.map(commande => {

          //creer un commande item pour chaque paire(nomProduit/quantite)
          let allCommandeItems: CommandeItem[] = [];
          for (let i = 0; i < commande._produitIds.length; i++) {
            //on recupere la quantite
            let aCommandeproductQuantity:number = commande._produitIds[i][1];
            
            //on recupere le produit et on creer un item dans le subscribe
            this.produitlist.getProduitById(commande._produitIds[i][0]).subscribe(produit=>{
              let aCommandeItem = new CommandeItem(produit, aCommandeproductQuantity)
              allCommandeItems.push(aCommandeItem);
            })
          }

          return new Commande(
            commande._id,
            commande._dateCommande,
            commande._dateLivraison,
            commande._dateUpdate,
            allCommandeItems,
            commande._prixCommande,
            commande._clientName,
            commande._lieu,
            commande._statut
          )
        })
      })
      ,
      catchError(error => {
        console.error('Erreur lors de la récupération des produits:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    )
  }

  getCommandeById(id: string) {
  }

  getCommandeByClientName(cName: string) {
  }


  // Obtenir les produits de la commande actuelle.
  // Filtrer les produits de la commande actuelle pour ceux dont le nom correspond au nom spécifié.
  // getCommandeByPrductName(productName: string) {
  //   return this.commandes.filter(command => this.produitlist.getManyProductById(command.produits).filter(prod => prod.name === productName))
  // }

  // getManyCommandeById(ids: string[]) {
  //   return this.commandes.filter(index => ids.includes(index.id))
  // }

  // deleteCommandeById(id: string) {
  //   this.commandes = this.commandes.filter(index => index.id !== id);
  // }


  createCommande(command: CommandeBackend) {
    return this.http.post<any>(this.apiUrl,command).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête POST:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  
  updateCommande(command: CommandeBackend) {
    const url = `${this.apiUrl}/${command.id}`;
    return this.http.put<any>(url,command).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête PUT:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }



  // getClientforCommande(commandeid: number) {
  //   let commande = this.getCommandeById(commandeid);
  //   if (commande) {
  //     let clientC = this.clientList.getClientById(commande.client)
  //     return clientC;
  //   }
  //   return undefined;
  // }

}
