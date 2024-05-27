import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from '../../core/model/produit';
import { ProductService } from '../../core/services/product.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produit-modal',
  templateUrl: './produit-modal.component.html',
  styleUrl: './produit-modal.component.css'
})
export class ProduitModalComponent implements OnInit {
  @Input() product!: Produit;
  format!: string;
  formData = {
    id: '',
    name: '',
    description: '',
    price: 0,
    quantityInStock: 0,
    unitType: '',
    unitQuantity: 0,
    fournisseurId: '',
    image: ''
  };
  actionModifier = false;
  modifierCompteur = 0;
  supprimerCompteur = 0;
  constructor(public modalService: BsModalRef, private productService: ProductService) { }

  ngOnInit(): void {
    console.log('produit', this.product.getId())
    this.format = this.product.getUnitType() == 'caisse' ? ('lot de : ' + this.product.getUnitQuantity()) : this.product.getUnitType();
    this.formData = {
      id: this.product.getId(),
      name: this.product.getName(),
      description: this.product.getDescription(),
      price: this.product.getPrice(),
      quantityInStock: this.product.getQuantityInStock(),
      unitType: this.product.getUnitType(),
      unitQuantity: this.product.getUnitQuantity(),
      fournisseurId: this.product.getFournisseurId().toString(),
      image: this.product.getImage() 
    };
  }

  closeModal() {
    this.modalService.hide();
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
  }

  modifier() {
    this.actionModifier = true;
    // Sélectionnez tous les éléments avec la classe "mon-input"
    const elements = document.querySelectorAll('.mon-input');
    // Parcourez chaque élément et ajoutez l'attribut "disabled"
    elements.forEach((element) => {
      element.removeAttribute('disabled');
    });
  }

  update() {
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
        if (this.formData.unitType == 'caisse') missingField = 'Quantité d\'unité';
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
    if (this.formData.price < 0 || this.formData.quantityInStock < 0) {
      alert('Veuillez rentrer des chiffres valide');
      return;
    }

    if (this.modifierCompteur < 1) {
      alert('vous allez mettre a jour un produit !! \n clicker encore sur  enregistrer pour effectuer la suppression')
      this.modifierCompteur++;
      return;
    }

    let produitForm = new Produit(
      this.product.getId(),
      this.formData.name,
      this.formData.description,
      this.formData.price,
      this.formData.quantityInStock,
      this.formData.unitType,
      this.formData.unitQuantity,
      parseInt(this.formData.fournisseurId),
      this.formData.image
    );

    // Appelez la méthode updateProduit du service ProductService
    this.productService.updateProduit(produitForm).subscribe(
      response => {
        // Gérez la réponse de la requête ici, par exemple, affichez un message de succès
        console.log('Produit mis à jour avec succès', response);
      },
      error => {
        // Gérez les erreurs de la requête ici, par exemple, affichez un message d'erreur
        console.error('Erreur lors de la mise à jour du produit', error);
      }
    );


    this.modalService.hide();
  }

  delet() {
    if (this.supprimerCompteur < 1) {
      alert('vous allez supprimer un produit !! \n clicker encore sur supprimer pour effectuer la suppression')
      this.supprimerCompteur++;
      return;
    }
    this.productService.deleteProduit(this.product.getId()).subscribe(
      response => {
        // Gérez la réponse de la requête ici, par exemple, affichez un message de succès
        console.log('Produit supprimé avec succès', response);
      },
      error => {
        // Gérez les erreurs de la requête ici, par exemple, affichez un message d'erreur
        console.error('Erreur lors de la suppression du produit', error);
      }
    );

    this.modalService.hide();
  }

}