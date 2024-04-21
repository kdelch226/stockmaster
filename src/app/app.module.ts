import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ReceptionComponent } from './reception/reception.component';
import { EmployeComponent } from './employe/employe.component';
import { AllClientComponent } from './all-client/all-client.component';
import { AllCommandeComponent } from './all-commande/all-commande.component';
import { AllEmployeComponent } from './all-employe/all-employe.component';
import { AllFournisseurComponent } from './all-fournisseur/all-fournisseur.component';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { AllReceptionComponent } from './all-reception/all-reception.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddReceptionComponent } from './add-reception/add-reception.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    ProduitComponent,
    ClientComponent,
    CommandeComponent,
    FournisseurComponent,
    ReceptionComponent,
    EmployeComponent,
    AllClientComponent,
    AllCommandeComponent,
    AllEmployeComponent,
    AllFournisseurComponent,
    AllProduitComponent,
    AllReceptionComponent,
    AddProduitComponent,
    AddClientComponent,
    AddFournisseurComponent,
    AddReceptionComponent,
    AddCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
