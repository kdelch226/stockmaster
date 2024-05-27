import { Injectable } from '@angular/core';
import { RendezVous } from '../model/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor() { }
  private rendezVousList: RendezVous[] = [
    new RendezVous(1, 'John Doe', new Date('2022-04-01'), 'Bureau du client', 'Présentation du projet', 'En attente'),
    new RendezVous(2, 'Jane Smith', new Date('2022-04-02'), 'Café local', 'Discussion informelle', 'Confirmé'),
    new RendezVous(3, 'Alice Johnson', new Date('2022-04-03'), 'Salle de conférence', 'Réunion d\'équipe', 'Annulé'),
    new RendezVous(4, 'Bob Brown', new Date('2022-04-04'), 'Restaurant', 'Déjeuner avec le client', 'Confirmé'),
    new RendezVous(5, 'Emma Davis', new Date('2022-04-05'), 'Bureau', 'Présentation des résultats', 'En attente')
];


  getRendezVous(){
    return this.rendezVousList
  }

  getRendezVousByPersonneName(pName:string){
    return this.rendezVousList.filter(rendezvous=> rendezvous.personne==pName)
  }
}
