import { Component, Input } from '@angular/core';
import { Commande } from '../model/commande';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CommandeModalComponent } from '../commande-modal/commande-modal.component';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {


  @Input() commande!: Commande;
  bsModalRef?: BsModalRef;
  format = '';

  constructor(private modalService: BsModalService) { }

  OpenCommandeInfoModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      backdrop: 'static',
      initialState: { initialCommande: this.commande }
    };

    this.bsModalRef = this.modalService.show(CommandeModalComponent, modalOptions);
  }

}
