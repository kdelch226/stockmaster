import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrl: './all-client.component.css'
})
export class AllClientComponent implements OnInit {

  allClient= {} as Client[];
  constructor(private clientList: ClientService){}

  ngOnInit(): void {
    this.allClient= this.clientList.getClients();
  }
}
