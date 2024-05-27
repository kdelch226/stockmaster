import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../../core/services/product.service';
import { Produit } from '../../core/model/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {
  constructor(public bsModalRef: BsModalRef, private productService: ProductService) { }
  formData = {
    id: '',
    name: '',
    description: '',
    price: '',
    quantityInStock: '',
    unitType: '',
    unitQuantity: '',
    fournisseurId: 1,
    image: ''
  };
  isCollapsed = false;
  isEveryThingEntri = false;


  verifyForm() {
    if (!this.formData) {
      alert('Les données du formulaire sont manquantes.');
      return;
    }

    let missingField = '';
    switch (true) {
      case !this.formData.name:
        missingField = 'Nom du produit';
        break;
      case !this.formData.unitType:
        missingField = 'Type de l\'unité';
        break;
      case !this.formData.unitQuantity:
        if (this.formData.unitType != 'caisse') {
          this.formData.unitQuantity='1';
          break;
        };
          missingField = 'Quantité d\'unité';
        break;
      case !this.formData.description:
        missingField = 'Description';
        break;
      case !this.formData.price:
        missingField = 'Prix';
        break;
      case !this.formData.quantityInStock:
        missingField = 'Quantité en stock';
        break;
      case !this.formData.fournisseurId:
        missingField = 'ID du fournisseur';
        break;
      default:
        break;
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      return;
    }


    // Vérifier que le prix et la quantité en stock sont des nombres
    if (isNaN(Number(this.formData.price)) || isNaN(Number(this.formData.quantityInStock))) {
      alert('Veuillez rentrer des chiffres');
      return;
    }

    if (!this.formData.image) {
      this.isCollapsed = true;
      return;
    }

    this.isEveryThingEntri = true;
  }
  onSubmit() {
    let produitForm = new Produit(
      this.formData.id,
      this.formData.name,
      this.formData.description,
      parseInt(this.formData.price),
      parseInt(this.formData.quantityInStock),
      this.formData.unitType,
      parseInt(this.formData.unitQuantity),
      this.formData.fournisseurId,
      this.formData.image
    );

    this.productService.PostProduit(produitForm)
      .subscribe(
        response => {
          console.log('Réponse du serveur :', response);
          // Gérer la réponse ici (par exemple, afficher un message de succès)
        },
        error => {
          console.error('Erreur lors de la requête POST :', error);
          // Gérer l'erreur ici (par exemple, afficher un message d'erreur)
        }
      );
  }

  onFileSelected(event: any) {
    // Gérer la sélection d'un fichier ici et convertir l'image en base64
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    this.isCollapsed = false;
  }
}
