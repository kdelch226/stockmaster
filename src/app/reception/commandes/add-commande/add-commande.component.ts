import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommandService } from '../service/command.service';
import { ProductService } from '../../core/services/product.service';
import { Produit } from '../../core/model/produit';
import { Observable } from 'rxjs';
import { CommandePanierService } from '../service/commande-panier.service';
import { CommandeItem } from '../model/commandeItem';
import { CommandePanier } from '../model/commandePaniers';
import { Commande } from '../model/commande';
import { NgbCalendar, NgbDate, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommandeBackend } from '../model/commandeBackend';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrl: './add-commande.component.css'
})
export class AddCommandeComponent implements OnInit{


  motProduitRecherche = '';
  listeProduitRechercher?: Produit[] = [];
  listeProduitAjouter= new CommandePanier();

  formData = {
    dateLivraison: '',
    lieuLivraison: '',
    clientname: '',
  }
  actionSupprimer = 0;

  
  constructor(private bsModalRef: BsModalRef, private commandeServ: CommandService, private produitServ: ProductService, private commandPanier:CommandePanierService,private calendar: NgbCalendar) { }
  ngOnInit(): void {
    this.commandPanier.removeAlllitems();
    this.listeProduitAjouter=this.commandPanier.getCommandePanier()
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
    console.log('mot rechercehr ',this.motProduitRecherche);
    console.log('produits rechercehr ',this.listeProduitRechercher);
  }

  removeitemFromPanier(commandItem: CommandeItem){
    console.log(commandItem)
    this.commandPanier.removeCommandeItem(commandItem.produit.getId())
  }

  // isDisabled = (date: NgbDate) => {
  //   const today = this.calendar.getToday();
  //   // Désactiver les dates passées
  //   return this.calendar.get(date) < today.year ||
  //          (this.calendar.get(date) === today.year && this.calendar.getMonth(date) < today.month) ||
  //          (this.calendar.get(date) === today.year && this.calendar.getMonth(date) === today.month && this.calendar.getDay(date) < today.day);
  // };

  createCommande(){
    if(this.listeProduitAjouter.commandesItems.length==0){
      alert('aucun produit ajouter')
      return
    }
    let todaydate=new Date();
    let id= todaydate.toDateString()

    let missingField = '';
    switch (true) {
      case !this.formData.clientname:
        missingField = 'Nom du client';
        break;
      case !this.formData.dateLivraison:
        missingField = 'Date de livraison';
        break;
      case !this.formData.lieuLivraison:
        missingField = 'lieu de livraison';
        break;
      default:
        break;
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      
    }

    let commandeBackendItems:[string, number][]=[];
    for(let i=0;i<this.listeProduitAjouter.commandesItems.length;i++){
        commandeBackendItems.push([this.listeProduitAjouter.commandesItems[i].produit.getId(),this.listeProduitAjouter.commandesItems[i].quantity])
    }


    let commande= new CommandeBackend (
      id,
      todaydate,
      new Date(this.formData.dateLivraison),
      todaydate,
      commandeBackendItems,
      this.listeProduitAjouter.GetTotalprice(),
      this.formData.clientname,
      this.formData.lieuLivraison,
      this.commandPanier.statuts.enAttente      
    );

    this.commandeServ.createCommande(commande).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
        // Gérer la réponse ici (par exemple, afficher un message de succès)
      },
      error => {
        console.error('Erreur lors de la requête POST :', error);
        // Gérer l'erreur ici (par exemple, afficher un message d'erreur)
      }
    );

    this.bsModalRef.hide();

  }

  closeModal() {
    this.bsModalRef.hide()
  }
}
