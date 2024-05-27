import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { ProductService } from '../../core/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  


  constructor(private produitlist: ProductService, private http: HttpClient) { }


  private apiUrl = 'http://localhost:3000/api/client';


  getClient(): Observable<Client[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(allClients => {
        return allClients.map(client => {

          return new Client(
            client._id,
            client._name,
            client._address,
            client._phoneNumber,
            client._email,
            client._type
          )
        })
      })
      ,
      catchError(error => {
        console.error('Erreur lors de la récupération des CLIENTS:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    )
  }

  getClientById(id: string) {
  }

  getClientByClientName(cName: string) {
  }

  // Obtenir les produits de la client actuelle.
  // Filtrer les produits de la client actuelle pour ceux dont le nom correspond au nom spécifié.
  // getclientByPrductName(productName: string) {
  //   return this.clients.filter(command => this.produitlist.getManyProductById(command.produits).filter(prod => prod.name === productName))
  // }

  // getManyclientById(ids: string[]) {
  //   return this.clients.filter(index => ids.includes(index.id))
  // }

  // deleteclientById(id: string) {
  //   this.clients = this.clients.filter(index => index.id !== id);
  // }


  createClient(command: Client) {
    return this.http.post<any>(this.apiUrl,command).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête POST:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  
  updateClient(command: Client) {
    const url = `${this.apiUrl}/${command.id}`;
    return this.http.put<any>(url,command).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête PUT:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  deleteClient(id: string) {
    const url=`${this.apiUrl}/${id}`
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête PUT:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    )
  }
}