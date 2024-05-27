import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProduitComponent } from './produit/produit.component';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { ProduitModalComponent } from './produit-modal/produit-modal.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitCardComponent } from './produit-card/produit-card.component';



@NgModule({
  declarations: [
    ProduitComponent,
    AllProduitComponent,
    ProduitModalComponent,
    AddProduitComponent,
    ProduitCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ProduitComponent,
    AllProduitComponent,
    ProduitModalComponent,
    AddProduitComponent,
    ProduitCardComponent
  ]
})
export class ProduitsModule { }
