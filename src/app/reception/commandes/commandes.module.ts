import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeModalComponent } from './commande-modal/commande-modal.component';
import { CommandeComponent } from './commande/commande.component';
import { AllCommandeComponent } from './all-commande/all-commande.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProduitCardComponent } from '../produits/produit-card/produit-card.component';
import { ProduitsModule } from '../produits/produits.module';



@NgModule({
  declarations: [
    CommandeComponent,
    AllCommandeComponent,
    AddCommandeComponent,
    CommandeModalComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ProduitsModule
  ],
  exports: [
    CommandeComponent,
    AllCommandeComponent,
    AddCommandeComponent,
    CommandeModalComponent
  ],
})
export class CommandesModule { }
