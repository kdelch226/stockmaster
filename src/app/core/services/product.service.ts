import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators'; // Suppression de l'importation de 'tap' car non utilisé
import { Produit } from '../model/produit';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/produit';
  private produits: Produit[] = [];

  constructor(private http: HttpClient) { }

  // Cette méthode récupère les produits depuis le backend
  private fetchProduitsFromBackend(): Observable<Produit[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(allProduits => {
        // Transforme les données reçues du backend en instances de Produit
        return allProduits.map(produit => {
          return new Produit(
            produit._id,
            produit.name,
            produit.description,
            produit.price,
            produit.quantityInStock,
            produit.unitType,
            produit.unitQuantity,
            produit.fournisseurId,
            produit.image
          );
        });
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des produits:', error.error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  // Cette méthode récupère les produits depuis le backend ou retourne les produits déjà stockés localement
  getProduits(): Observable<Produit[]> {
    if (this.produits.length === 0) {
      // Si aucun produit n'a été stocké localement, on récupère les produits depuis le backend
      console.log('liste vide ici');
      return this.fetchProduitsFromBackend();
    } else {
      // Sinon, on retourne les produits stockés localement
      return new Observable(observer => {
        observer.next(this.produits);
        observer.complete();
      });
    }
  }

  // Cette méthode récupère un produit par son ID depuis les produits stockés localement ou depuis le backend
  getProduitById(searchedId: string): Observable<Produit> {
    const url = `${this.apiUrl}/${searchedId}`;
    return this.http.get<any>(url)
      .pipe(
        map(produit => {
          return new Produit(
            produit._id,
            produit.name,
            produit.description,
            produit.price,
            produit.quantityInStock,
            produit.unitType,
            produit.unitQuantity,
            produit.fournisseurId,
            produit.image
          );
        })
        , catchError(error => {
          console.error('Erreur lors de la requête Get Id:', error.error);
          throw error;
        })
      );
  }

  // Envoie une requête HTTP DELETE pour mettre a jour un produit avec l'ID spécifié
  updateProduit(updatedProduct: Produit): Observable<any> {
    console.log('update produit');
    const url = `${this.apiUrl}/${updatedProduct.getId()}`;
    return this.http.put<any>(url, updatedProduct)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la requête PUT:', error);
          throw error;
        })
      );
  }


  // Cette méthode récupère les produits dont le nom correspond à une chaîne de caractères donnée
  getProduitsByName(pName: string): Observable<Produit[]> {
    return this.getProduits().pipe(
      map(produits => produits.filter(produit => produit.getName().includes(pName)))
    );
  }



  // Cette méthode envoie un nouveau produit vers le backend
  PostProduit(newProduit: Produit): Observable<Produit> {
    return this.http.post<any>(this.apiUrl, newProduit).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête POST:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  // Envoie une requête HTTP DELETE pour supprimer un produit avec l'ID spécifié
  deleteProduit(productId: string): Observable<any> {
    console.log('delete produit');
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la requête DELETE:', error);
          throw error;
        })
      );
  }

  changeProduitQuantity(produit: Produit, quantite: number) {

  }

  addProduitQuantity(produit: Produit, quantite: number) {
    produit.setQuantityInStock(produit.getQuantityInStock()+quantite);
    this.updateProduit(produit);
  }
  reduceProduitQuantity(produit: Produit, quantite: number) {
    produit.setQuantityInStock(produit.getQuantityInStock()-quantite);
    this.updateProduit(produit);
  }

}
