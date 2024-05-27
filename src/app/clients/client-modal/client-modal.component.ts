import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrl: './client-modal.component.css'
})
export class ClientModalComponent implements OnInit {


 @Input() client!:Client;
  formData = {
    id: '',
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    type: ''
  };
  actionModifier = false;
  modifierCompteur = 0;
  supprimerCompteur = 0;
  constructor(public modalService: BsModalRef, private clientService: ClientService) { }

  ngOnInit(): void {
    this.formData = {
      id: this.client.id,
      name: this.client.name,
      address: this.client.address,
      phoneNumber: this.client.phoneNumber,
      email: this.client.email,
      type: this.client.type
    };
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
        missingField = 'Nom du client';
        break;
      case !this.formData.email:
        missingField = 'Couriel mail';
        break;
      case !this.formData.address:
        missingField = 'adresse / Localisation';
        break;
      case !this.formData.phoneNumber:
        missingField = 'Prix';
        break;
      case !this.formData.type:
        missingField = 'type';
        break;
      default:
        break;
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      return;
    }

    if (this.modifierCompteur < 1) {
      alert('vous allez mettre a jour un client !! \n clicker encore sur enregistrer  pour effectuer la mise a jour')
      this.modifierCompteur++;
      return;
    }

    let clientForm = new Client(
      this.client.id,
      this.formData.name,
      this.formData.address,
      this.formData.phoneNumber,
      this.formData.email,
      this.formData.type
    );

    // Appelez la méthode updateProduit du service ProductService
    this.clientService.updateClient(clientForm)
    .subscribe(
      response => {
        // Gérez la réponse de la requête ici, par exemple, affichez un message de succès
        console.log('client mis à jour avec succès', response);
      },
      error => {
        // Gérez les erreurs de la requête ici, par exemple, affichez un message d'erreur
        console.error('Erreur lors de la mise à jour du client', error);
      }
    );


    this.modalService.hide();
  }

  delet() {
    if (this.supprimerCompteur < 1) {
      alert('vous allez supprimer un client !! \n clicker encore sur supprimer pour effectuer la suppression')
      this.supprimerCompteur++;
      return;
    }
    this.clientService.deleteClient(this.client.id)
      .subscribe(
        response => {
          // Gérez la réponse de la requête ici, par exemple, affichez un message de succès
          console.log('client supprimé avec succès', response);
        },
        error => {
          // Gérez les erreurs de la requête ici, par exemple, affichez un message d'erreur
          console.error('Erreur lors de la suppression du client', error);
        }
      );

    this.modalService.hide();
  }

  closeModal() {
    this.modalService.hide();
  }

}
