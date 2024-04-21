import { Component, Input } from '@angular/core';
import { Commande } from '../model/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {
 @Input() commande!:Commande;
 constructor(){}
}
