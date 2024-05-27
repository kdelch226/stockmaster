import { Component, OnInit } from '@angular/core';
import { Produit } from '../../core/model/produit';
import { ProductService } from '../../core/services/product.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddProduitComponent } from '../add-produit/add-produit.component';
import { EMPTY, catchError, take } from 'rxjs';

@Component({
  selector: 'app-all-produit',
  templateUrl: './all-produit.component.html',
  styleUrls: ['./all-produit.component.css']
})
export class AllProduitComponent implements OnInit {
  allProduct: Produit[] = [];
  bsModalRef?: BsModalRef;
  motRecherche: string = '';
  ordre: string = '';

  constructor(private producService: ProductService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.producService.getProduits()
      .pipe(
        take(1), // Limite à une seule émission
        catchError(error => {
          console.error('Error loading products:', error);
          return EMPTY; // Retourne un observable vide en cas d'erreur
        })
      )
      .subscribe(
        (produits) => {
          if (produits) {
            this.allProduct = produits;
          } else {
            console.error('Empty list returned from getProduits()');
          }
        }
      );
  }
  

  chercherProduit(entre: string) {
    this.producService.getProduitsByName(entre)
      .subscribe(
        produit => {
          if (produit) {
            this.allProduct = produit;
          } else {
            console.error('Empty list returned from getProduitByName()');
          }
        },
        error => console.log('Error searching for products:', error.error)
      );
  }

  triProduit(event: any) {
    let ordre=event.target.value;
    switch (ordre) {
      case 'nomCroissant':
        this.allProduct = this.allProduct.sort((a: Produit, b: Produit) => a.getName().localeCompare(b.getName()));
        break;
      case 'nomDecroissant':
        this.allProduct = this.allProduct.sort((b: Produit, a: Produit) => b.getName().localeCompare(a.getName()));
        break;
      case 'prixCroissant':
        this.allProduct = this.allProduct.sort((a: Produit, b: Produit) => a.getPrice() - b.getPrice());
        break;
      case 'prixDecroissant':
        this.allProduct = this.allProduct.sort((a: Produit, b: Produit) => b.getPrice() - a.getPrice());
        break;
      case 'quantiteCroissant':
        this.allProduct = this.allProduct.sort((a: Produit, b: Produit) => a.getQuantityInStock() - b.getQuantityInStock());
        break;
      case 'quantiteDecroissant':
        this.allProduct = this.allProduct.sort((a: Produit, b: Produit) => b.getQuantityInStock() - a.getQuantityInStock());
        break;
      default:
        break;
    }
  }
  

  OpenAddProduitModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      backdrop:'static'
    };
    this.bsModalRef = this.modalService.show(AddProduitComponent, modalOptions);
  }

}
