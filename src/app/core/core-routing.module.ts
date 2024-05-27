import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcceuilComponent } from "../acceuil/acceuil.component";
import { AuthgardService } from "./authgard.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProduitComponent } from "../produits/produit/produit.component";
import { AllProduitComponent } from "../produits/all-produit/all-produit.component";
import { AllClientComponent } from "../clients/all-client/all-client.component";
import { AllEmployeComponent } from "../all-employe/all-employe.component";
import { AllCommandeComponent } from "../commandes/all-commande/all-commande.component";
import { AllFournisseurComponent } from "../all-fournisseur/all-fournisseur.component";
import { AllReceptionComponent } from "../all-reception/all-reception.component";

const routes: Routes=[
    { 
        path: 'master', 
        canActivate: [AuthgardService],
        component:NavbarComponent,
        children: [
          { path: 'acceuil', component: AcceuilComponent,canActivate:[AuthgardService]  }, // Route pour la page d'accueil
          { path: 'produits', component:AllProduitComponent,canActivate:[AuthgardService]  },
          { path: 'clients', component:AllClientComponent,canActivate:[AuthgardService]  },
          { path: 'employes', component:AllEmployeComponent,canActivate:[AuthgardService]  },
          { path: 'commandes', component:AllCommandeComponent,canActivate:[AuthgardService]  },
          { path: 'fournisseurs', component:AllFournisseurComponent,canActivate:[AuthgardService]  },
          { path: 'receptions', component:AllReceptionComponent,canActivate:[AuthgardService]  },

          { path: '**', redirectTo: 'acceuil' } // Redirection par défaut vers la page d'accueil si la route est invalide
        ]
      },
    ]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class CoreRoutingModule{}