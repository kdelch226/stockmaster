import { Component, Input } from '@angular/core';
import { Client } from '../model/client';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ClientModalComponent } from '../client-modal/client-modal.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  bsModalRef?:BsModalRef
  @Input() client!: Client;
  constructor(private modalService: BsModalService){}
  openClientInfo() {
    const modalOptions: ModalOptions={
      class:'modal-lg',
      backdrop:'static',
      initialState:{client:this.client}
    };
    this.bsModalRef = this.modalService.show(ClientModalComponent,modalOptions)
  }

}
