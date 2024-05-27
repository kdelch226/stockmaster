import { Injectable } from '@angular/core';
import { Fournisseur } from '../model/fournisseur';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private produitsList: ProductService) { }

  private fournisseurs: Fournisseur[] = [
    new Fournisseur(1, 'Acme Corporation', '123 Rue Fournisseur', '555-1234', 'contact@acme.com', [1, 2, 3]),
    new Fournisseur(2, 'Widgets Inc.', '456 Avenue Fournisseur', '555-5678', 'info@widgets.com', [2, 4]),
    new Fournisseur(3, 'Gadget Co.', '789 Boulevard Fournisseur', '555-9012', 'sales@gadgetco.com', [3, 5]),
    new Fournisseur(4, 'Tech Solutions', '1010 Chemin Fournisseur', '555-3456', 'support@techsolutions.com', [1, 4, 5]),
    new Fournisseur(5, 'Electronics Emporium', '1212 Route Fournisseur', '555-7890', 'info@electronics.com', [2, 3])
  ];
  
  getFournisseurByid(id:number){
    return this.fournisseurs.find(fournisseur=> fournisseur.id===id);
  }
  getFournisseurByName(Cname:string){
    return this.fournisseurs.filter(fournisseur=> fournisseur.companyName===Cname);
  }

  // //touver unb fournisseur avec le nom du produit quil vent
  // getFournisseurByProductName(pname:string){
  //   return this.fournisseurs.filter(fournisseur=> this.produitsList.getManyProductById(fournisseur.produitsIds).filter(produit => produit.name===pname) )
  // }
}


