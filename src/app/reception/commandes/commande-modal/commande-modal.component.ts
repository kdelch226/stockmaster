import { Component, Input, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommandService } from '../service/command.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from '../../core/model/produit';
import { ProductService } from '../../core/services/product.service';
import { CommandePanier } from '../model/commandePaniers';
import { CommandePanierService } from '../service/commande-panier.service';
import { CommandeBackend } from '../model/commandeBackend';
import { CommandeItem } from '../model/commandeItem';

@Component({
  selector: 'app-commande-modal',
  templateUrl: './commande-modal.component.html',
  styleUrl: './commande-modal.component.css'
})
export class CommandeModalComponent implements OnInit {

  @Input() initialCommande!: Commande;
  motProduitRecherche = '';
  listeProduitRechercher?: Produit[] = [];
  listeProduitAjouter = new CommandePanier();
  actionModifier = false;
  modifAfaire = '';


  formData = {
    dateLivraison: new Date().toISOString().slice(0, 16),
    lieuLivraison: '',
    clientname: '',
    statut: ''
  }
  actionSupprimer = 0;
  actionUpdate = 0;
  status: string[] = [];



  constructor(private bsModalRef: BsModalRef, private commandeServ: CommandService, private produitServ: ProductService, private commandPanier: CommandePanierService, private calendar: NgbCalendar) { }
  ngOnInit(): void {
    this.formData = {
      dateLivraison: new Date(this.initialCommande.dateLivraison).toISOString().slice(0, 16),
      lieuLivraison: this.initialCommande.lieu,
      clientname: this.initialCommande.client,
      statut: this.initialCommande.statut
    }
    this.commandPanier.setPanierItems(this.initialCommande.produitIds);
    this.listeProduitAjouter = this.commandPanier.getCommandePanier()
    this.status.push(...Object.values(this.commandPanier.statuts));
  }

  removeitemFromPanier(commandItem: CommandeItem) {
    console.log(commandItem)
    this.commandPanier.removeCommandeItem(commandItem.produit.getId())
  }

  onProduitRechercher() {
    this.produitServ.getProduitsByName(this.motProduitRecherche)
      .subscribe(
        produit => {
          if (produit) {
            this.listeProduitRechercher = produit;
          } else {
            console.error('Empty list returned from getProduitByName()');
          }
        },
        error => console.log('Error searching for products:', error.error)
      );

  }

  // isDisabled = (date: NgbDate) => {
  //   const today = this.calendar.getToday();
  //   // Désactiver les dates passées
  //   return this.calendar.get(date) < today.year ||
  //          (this.calendar.get(date) === today.year && this.calendar.getMonth(date) < today.month) ||
  //          (this.calendar.get(date) === today.year && this.calendar.getMonth(date) === today.month && this.calendar.getDay(date) < today.day);
  // };

  modifier() {
    this.actionModifier = true;
    // Sélectionnez tous les éléments avec la classe "mon-input"
    const elements = document.querySelectorAll('.mon-input');
    // Parcourez chaque élément et ajoutez l'attribut "disabled"
    elements.forEach((element) => {
      element.removeAttribute('disabled');
    });
  }

  // Méthode pour vérifier si la commande peut être modifiée
  peutModifierCommande(commande: Commande): boolean {
    if (commande.statut === this.commandPanier.statuts.annule || commande.statut === this.commandPanier.statuts.termine) {
      return false; // Ne peut pas modifier si annulée ou terminée
    }
    return true; // Par défaut, la commande peut être modifiée
  }

  // Méthode pour vérifier si la commande peut être annulée
  peutAnnulerCommande(commande: Commande): boolean {
    return this.actionModifier && (commande.statut === this.commandPanier.statuts.enAttente || commande.statut === this.commandPanier.statuts.enCours); // Exemple de condition, ajustez selon vos besoins
  }

  // Méthode pour vérifier si la commande peut être terminée
  peutTerminerCommande(commande: Commande): boolean {
    return this.actionModifier && commande.statut === this.commandPanier.statuts.enCours; // Exemple de condition, ajustez selon vos besoins
  }




  annulerCommande() {
    let commandeBackendItems: [string, number][] = [];
    for (let i = 0; i < this.listeProduitAjouter.commandesItems.length; i++) {
      commandeBackendItems.push([this.listeProduitAjouter.commandesItems[i].produit.getId(), this.listeProduitAjouter.commandesItems[i].quantity])
    }

    let commande = new CommandeBackend(
      this.initialCommande.id,
      this.initialCommande.dateCommande,
      new Date(this.formData.dateLivraison),
      new Date(),
      commandeBackendItems,
      this.listeProduitAjouter.GetTotalprice(),
      this.formData.clientname,
      this.formData.lieuLivraison,
      this.commandPanier.statuts.annule
    );

    this.commandeServ.updateCommande(commande).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
        // Gérer la réponse ici (par exemple, afficher un message de succès)
      },
      error => {
        console.error('Erreur lors de la requête POST :', error);
        // Gérer l'erreur ici (par exemple, afficher un message d'erreur)
      }
    );

    this.closeModal();

  }

  updateCommande() {
    if (this.listeProduitAjouter.commandesItems.length == 0) {
      alert('aucun produit ajouter')
      return
    }


    let missingField = '';
    switch (true) {
      case !this.formData.clientname:
        missingField = 'Nom du client';
        break;
      case !this.formData.lieuLivraison:
        missingField = 'lieu de livraison';
        break;
      default:
        break;
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      return;
    }

    let commandeBackendItems: [string, number][] = [];
    for (let i = 0; i < this.listeProduitAjouter.commandesItems.length; i++) {
      commandeBackendItems.push([this.listeProduitAjouter.commandesItems[i].produit.getId(), this.listeProduitAjouter.commandesItems[i].quantity])
    }

    let dayLivraison:Date=new Date(this.formData.dateLivraison);
    if(this.formData.statut===this.commandPanier.statuts.termine) dayLivraison= new Date()

    let commande = new CommandeBackend(
      this.initialCommande.id,
      this.initialCommande.dateCommande,
      dayLivraison,
      new Date(),
      commandeBackendItems,
      this.listeProduitAjouter.GetTotalprice(),
      this.formData.clientname,
      this.formData.lieuLivraison,
      this.formData.statut
    );

    console.log('update',commande)
    this.commandeServ.updateCommande(commande).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
        // Gérer la réponse ici (par exemple, afficher un message de succès)
      },
      error => {
        console.error('Erreur lors de la requête POST :', error);
        // Gérer l'erreur ici (par exemple, afficher un message d'erreur)
      }
    );

    this.closeModal();
  }

  closeModal() {
    this.bsModalRef.hide()
  }



}

