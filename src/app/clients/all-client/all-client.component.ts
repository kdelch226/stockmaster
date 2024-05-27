import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddClientComponent } from '../add-client/add-client.component';
import { EMPTY, catchError, map, take } from 'rxjs';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrl: './all-client.component.css'
})
export class AllClientComponent implements OnInit {


  bsModalRef?: BsModalRef;

  constructor(private clientList: ClientService, private modalService: BsModalService) { };
  allClient!: Client[];

  ngOnInit(): void {
    this.loadClinetFromBackend();
  }

  loadClinetFromBackend(){
    this.clientList.getClient().pipe(
      take(1),
      catchError(error => {
        console.error('Error loading products:', error);
        return EMPTY; // Retourne un observable vide en cas d'erreur
      })
    ).subscribe(clients => {
      if (clients) {
        this.allClient = clients
      }
      else {
        console.error('Empty list returned from getProduits()');
      }
    })
  }

  creerClientModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      backdrop: 'static'
    }
    this.bsModalRef = this.modalService.show(AddClientComponent, modalOptions);
  }
}
