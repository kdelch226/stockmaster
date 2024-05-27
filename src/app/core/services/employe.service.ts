import { Injectable } from '@angular/core';
import { Employe } from '../model/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor() { }

  private employes: Employe[] = [
    new Employe(1, 'Alice Johnson', '123 Rue des Employés', '555-1234', 'alice@example.com', new Date('2020-01-15'), 'Manager', 'Actif'),
    new Employe(2, 'Bob Brown', '456 Avenue du Personnel', '555-5678', 'bob@example.com', new Date('2019-11-20'), 'Développeur', 'Actif'),
    new Employe(3, 'Charlie Smith', '789 Boulevard des Collaborateurs', '555-9012', 'charlie@example.com', new Date('2020-03-10'), 'Analyste', 'Actif'),
    new Employe(4, 'David Davis', '1010 Chemin des Travailleurs', '555-3456', 'david@example.com', new Date('2021-02-05'), 'Designer', 'Inactif'),
    new Employe(5, 'Emma Wilson', '1212 Route du Personnel', '555-7890', 'emma@example.com', new Date('2019-08-30'), 'Administrateur', 'Actif')
  ];

  
  getEmployes(): Employe[] {
    return this.employes;
  }

  getEmployeById(id: number) {
    return this.employes.find(employe => employe.id == id);
  }
  getEmployeByName(namee: string) {
    return this.employes.filter(employe => employe.name == namee);
  }

  getEmployeByPoste(poste:string){
    return this.employes.filter(employe=> employe.post==poste)
  }


}
