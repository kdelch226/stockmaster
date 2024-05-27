import { Component, Input } from '@angular/core';
import { Employe } from '../core/model/employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {
  @Input() employer!:Employe;
  constructor(){}
}
