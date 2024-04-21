import { Injectable } from '@angular/core';
import { Commande } from '../model/commande';
import { ProductService } from './product.service';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private produitlist: ProductService, private clientList: ClientService) { }

  private commandes: Commande[] = [
    new Commande(1, new Date('2022-04-02'), [5, 1], 1, 'Livré'),
    new Commande(2, new Date('2022-04-03'), [2, 3], 2, 'En attente'),
    new Commande(3, new Date('2022-04-04'), [4, 5], 3, 'En cours'),
    new Commande(4, new Date('2022-04-05'), [5, 1], 4, 'En attente'),
    new Commande(5, new Date('2022-04-01'), [5, 2], 5, 'En cours'),
  ];

  getCommande() {
    return this.commandes
  }

  getCommandeById(id: number) {
    return this.commandes.find((command) => command.id === id);
  }

  getCommandeByClientName(cName: string) {
    return this.commandes.filter(() =>  this.clientList.getClientByName(cName) );
  }

  // Obtenir les produits de la commande actuelle.
  // Filtrer les produits de la commande actuelle pour ceux dont le nom correspond au nom spécifié.
  getCommandeByPrductName(productName: string) {
    return this.commandes.filter(command => this.produitlist.getManyProductById(command.produits).filter(prod => prod.name === productName))
  }

  getManyCommandeById(ids: number[]) {
    return this.commandes.filter(index => ids.includes(index.id))
  }

  deleteCommandeById(id: number) {
    this.commandes = this.commandes.filter(index => index.id !== id);
  }

  getClientforCommande(commandeid: number) {
    let commande = this.getCommandeById(commandeid);
    if (commande) {
      let clientC = this.clientList.getClientById(commande.client)
      return clientC;
    }
    return undefined;
  }

}
