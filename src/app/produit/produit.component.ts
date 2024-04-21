import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() product! :Produit;
  constructor(){}
}
