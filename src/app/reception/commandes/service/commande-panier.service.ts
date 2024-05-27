import { Injectable } from '@angular/core';
import { CommandeItem } from '../model/commandeItem';
import { CommandePanier } from '../model/commandePaniers';
import { Produit } from '../../core/model/produit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandePanierService {

  constructor() { }

  private commandePanier = new CommandePanier();
  
  private _statuts = {
    enAttente: 'En attente',
    enCours: 'En cours',
    termine: 'Terminé',
    annule: 'Annulé'
  };

  get statuts() {
    return this._statuts;
  }


  addCommandeItem(produit: Produit,quantity:number) {
    let commandeitem = this.commandePanier.commandesItems.find(commandeIt => commandeIt.produit.getId() == produit.getId())
    if (commandeitem) {
      this.changeCommandItemsQunatity(produit.getId(), quantity)
    } else {
      this.commandePanier.commandesItems.push(new CommandeItem(produit,quantity))
    }

  }

  changeCommandItemsQunatity(commandItemId: string, quantity: number) {
    let commandeitem = this.commandePanier.commandesItems.find(commandeIt => commandeIt.produit.getId() == commandItemId)
    if (commandeitem) {
      commandeitem.quantity = quantity;
    }
  }

  getCommandePanier() {
    return this.commandePanier;
  }

  removeCommandeItem(produitId: string) {
    let commandeitem = this.commandePanier.commandesItems.find(commandeIt => commandeIt.produit.getId() == produitId)
    if (commandeitem) {
      this.commandePanier.commandesItems=this.commandePanier.commandesItems.filter(item =>
        item.produit.getId() != produitId);
    }

  }



  removeAlllitems(){
    this.commandePanier.commandesItems=[]
  }

  setPanierItems(commandeItems:CommandeItem[]){
    this.commandePanier.commandesItems=commandeItems;
  }
  
}
