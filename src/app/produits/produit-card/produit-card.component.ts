import { Component, Input } from '@angular/core';
import { Produit } from '../../core/model/produit';
import { CommandePanierService } from '../../commandes/service/commande-panier.service';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrl: './produit-card.component.css'
})
export class ProduitCardComponent {
  @Input() produit?:Produit;
  quantite:number=0;
  
  constructor(private commandePanierServ: CommandePanierService ){}

  ajouterPanier(produit:Produit,quantite:number) {
    if (quantite==0 || quantite<0){
      alert ('rentrez une quantite valide');
      return
    }
    this.commandePanierServ.addCommandeItem(produit,quantite);
    console.log(this.commandePanierServ.getCommandePanier())
  }
}

