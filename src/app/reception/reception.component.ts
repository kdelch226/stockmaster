import { Component, Input } from '@angular/core';
import { Reception } from '../model/reception';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {
  @Input() recpt! :Reception;
  constructor(){}
}
