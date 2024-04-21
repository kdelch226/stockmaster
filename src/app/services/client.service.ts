import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    new Client(1, 'John Doe', '123 Rue Principale', '555-1234', 'john@example.com'),
    new Client(2, 'Jane Smith', '456 Avenue Secondaire', '555-5678', 'jane@example.com'),
    new Client(3, 'Alice Johnson', '789 Boulevard Tertiaire', '555-9012', 'alice@example.com'),
    new Client(4, 'Bob Brown', '1010 Chemin Quaternaire', '555-3456', 'bob@example.com'),
    new Client(5, 'Emma Davis', '1212 Route Cinquième', '555-7890', 'emma@example.com')
  ];

  constructor() { }

  getClients(): Client[] {
    return this.clients;
  }

  getClientById(id: number) {
    return this.clients.find(client => client.id === id);
  }
  getClientByName(namee: string) {
    return this.clients.find(client => client.name === namee);
  }

}