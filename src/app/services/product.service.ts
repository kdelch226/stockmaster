import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/produit'; // L'URL de votre API backend
  private produits: Produit[] = []; // Variable pour stocker les produits récupérés du backend

  constructor(private http: HttpClient) {
    this.getProduitsFromBackend(); // Appel de la méthode pour récupérer les produits lors de l'initialisation du service
  }

  private getProduitsFromBackend(): void {
    this.http.get<Produit[]>(this.apiUrl).subscribe(
      produits => this.produits = produits,
      error => console.error(error)
    );
  }

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | undefined {
    return this.produits.find(produit => produit.id === id);
  }

  getProduitByName(pNme: string): Produit[] {
    return this.produits.filter(produit => produit.name === pNme);
  }

  // Autres méthodes pour manipuler les données des produits
}
