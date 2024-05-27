import { Component } from '@angular/core';
import { Client } from '../model/client';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  constructor(private modalService: BsModalRef, private clientService: ClientService) { }

  formData = {
    id: '1',
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    type: ''
  };
  creerCompteur = 0

  creerClient() {
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

    if (this.creerCompteur < 1) {
      alert('vous allez creer un client !! \n clicker encore sur ajouter pour effectuer la creation')
      this.creerCompteur++;
      return;
    }

    let clientForm = new Client(
      this.formData.id,
      this.formData.name,
      this.formData.address,
      this.formData.phoneNumber,
      this.formData.email,
      this.formData.type
    );

    // Appelez la méthode updateProduit du service ProductService
    this.clientService.createClient(clientForm)
    .subscribe(
      response => {
        // Gérez la réponse de la requête ici, par exemple, affichez un message de succès
        console.log('client creer avec succès', response);
      },
      error => {
        // Gérez les erreurs de la requête ici, par exemple, affichez un message d'erreur
        console.error('Erreur lors de la creation du client', error);
      }
    );


    this.modalService.hide();
  }


  closeModal() {
    this.modalService.hide();
  }

}
