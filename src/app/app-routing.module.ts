import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AllReceptionComponent } from './all-reception/all-reception.component';
import { AllClientComponent } from './all-client/all-client.component';
import { AllCommandeComponent } from './all-commande/all-commande.component';
import { AllFournisseurComponent } from './all-fournisseur/all-fournisseur.component';
import { AllProduitComponent } from './all-produit/all-produit.component';

const routes: Routes = [
  {path:'Acceuil',component:AcceuilComponent},
  {path:'Produits',component:AllProduitComponent},
  {path:'Clients',component:AllClientComponent},
  {path:'Commandes',component:AllCommandeComponent},
  {path:'Fournisseurs',component:AllFournisseurComponent},
  {path:'Reception',component:AllReceptionComponent},
  {path:'Employes',component:AllReceptionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
