import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from './core/authgard.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import path from 'path';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
// import { AcceuilComponent } from './acceuil/acceuil.component';
// import { AllReceptionComponent } from './all-reception/all-reception.component';
// import { AllClientComponent } from './all-client/all-client.component';
// import { AllCommandeComponent } from './all-commande/all-commande.component';
// import { AllFournisseurComponent } from './all-fournisseur/all-fournisseur.component';
// import { AllProduitComponent } from './produits/all-produit/all-produit.component';
// import { AccountComponent } from './account/account.component';
// import { NavbarComponent } from './core/navbar/navbar.component';

const routes: Routes = [
  { path: 'authentification', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'master', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate:[AuthgardService] },
  { path: '**', redirectTo: 'authentification' },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule, // Importez le module CoreModule ici
    AuthModule // Importez le module AuthModule ici
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
