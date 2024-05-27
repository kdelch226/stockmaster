import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ReceptionComponent } from './reception/reception.component';
import { EmployeComponent } from './employe/employe.component';
import { AllEmployeComponent } from './all-employe/all-employe.component';
import { AllFournisseurComponent } from './all-fournisseur/all-fournisseur.component';
import { AllReceptionComponent } from './all-reception/all-reception.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddReceptionComponent } from './add-reception/add-reception.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AuthModule} from './auth/auth.module';
import { ProduitsModule } from './produits/produits.module';
import { CoreModule } from './core/core.module';
import { ClientsModule } from './clients/clients.module';
import { CommandesModule } from './commandes/commandes.module';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FournisseurComponent,
    ReceptionComponent,
    EmployeComponent,
    AllEmployeComponent,
    AllFournisseurComponent,
    AllReceptionComponent,
    AddFournisseurComponent,
    AddReceptionComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    AuthModule,
    CoreModule,
    ProduitsModule,
    ClientsModule,
    CommandesModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

