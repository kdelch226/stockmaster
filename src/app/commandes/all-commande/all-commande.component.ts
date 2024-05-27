import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { CommandService } from '../service/command.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddCommandeComponent } from '../add-commande/add-commande.component';
import { EMPTY, catchError, take, tap } from 'rxjs';

@Component({
  selector: 'app-all-commande',
  templateUrl: './all-commande.component.html',
  styleUrl: './all-commande.component.css'
})
export class AllCommandeComponent implements OnInit {

  allCommande!: Commande[];
  motRecherche: string = '';
  bsModalRef?:BsModalRef;

  constructor(private commandeService: CommandService, private modalService:BsModalService){}

  ngOnInit(): void {
    this.loadAllCommande();
  }

  loadAllCommande(){
    this.commandeService.getCommande().pipe(
      take(1), // Limite à une seule émission
      catchError(error => {
        console.error('Error loading products:', error);
        return EMPTY; // Retourne un observable vide en cas d'erreur
      })
    )
    .subscribe(
      (allCommand) => {
        if (allCommand) {
          this.allCommande = allCommand;
        } else {

          console.error('Empty list returned from getProduits()');
        }
      }
    );
  }

  OpenAddCommandeModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      backdrop:'static'
    };
    this.bsModalRef = this.modalService.show(AddCommandeComponent, modalOptions);
  }

  cherchercommande(arg0: string) {
    throw new Error('Method not implemented.');
  }

  triCommande($event: Event) {
    throw new Error('Method not implemented.');
  }


}
