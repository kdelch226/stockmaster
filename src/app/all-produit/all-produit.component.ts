import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-produit',
  templateUrl: './all-produit.component.html',
  styleUrl: './all-produit.component.css'
})
export class AllProduitComponent implements OnInit {
 allProduct = {} as Produit[];

 constructor(private productLIst:ProductService ){}

 ngOnInit(): void {
   this.allProduct=this.productLIst.getProduits();
 }
}
