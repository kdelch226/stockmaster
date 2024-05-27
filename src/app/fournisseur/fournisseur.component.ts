import { Component, Input } from '@angular/core';
import { Fournisseur } from '../core/model/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent {
@Input() fourni!:Fournisseur
}
