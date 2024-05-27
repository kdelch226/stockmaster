import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AllClientComponent } from './all-client/all-client.component';
import { ClientModalComponent } from './client-modal/client-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent,
    AllClientComponent,
    ClientModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ClientComponent,
    AddClientComponent,
    AllClientComponent,
    ClientModalComponent
  ]
})
export class ClientsModule { }
