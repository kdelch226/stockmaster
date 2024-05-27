import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  modifier() {
    throw new Error('Method not implemented.');
  }
  actionModifier = false;

}
