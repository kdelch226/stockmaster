import { Injectable } from '@angular/core';
import { Tache } from '../model/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  private taches: Tache[] = [
    new Tache(1, 'Tâche 1', new Date('2024-04-15'), new Date('2024-04-20'), 'En cours'),
    new Tache(2, 'Tâche 2', new Date('2024-04-16'), new Date('2024-04-18'), 'Terminé'),
    new Tache(3, 'Tâche 3', new Date('2024-04-18'), new Date('2024-04-22'), 'En attente'),
    new Tache(4, 'Tâche 4', new Date('2024-04-20'), new Date('2024-04-25'), 'En cours'),
    new Tache(5, 'Tâche 5', new Date('2024-04-22'), new Date('2024-04-24'), 'Terminé')
  ];

  // Fonction pour récupérer toutes les tâches
  getTaches(): Tache[] {
    return this.taches;
  }

  // Fonction pour récupérer une tâche par son ID
  getTacheById(id: number): Tache | undefined {
    return this.taches.find(tache => tache.id === id);
  }

  // Fonction pour récupérer les tâches par leur état
  getTachesByEtat(etat: string): Tache[] {
    return this.taches.filter(tache => tache.etat === etat);
  }

  trierTachesParDateDebutCroissante(): Tache[] {
    return this.taches.sort((a, b) => a.dateDebut.getTime() - b.dateDebut.getTime());
  }
}
