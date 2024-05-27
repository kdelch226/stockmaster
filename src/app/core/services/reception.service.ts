import { Injectable } from '@angular/core';
import { Reception } from '../model/reception';
import { FournisseurService } from './fournisseur.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  
  constructor(private fournisseurList: FournisseurService) { }
  private receptions: Reception[] = [
    new Reception(1, new Date('2022-04-01'), [1, 2], 1,'termine'),
    new Reception(2, new Date('2022-04-02'), [3, 4], 2,'termine'),
    new Reception(3, new Date('2022-04-03'), [1, 2, 3], 3,'en-cours'),
    new Reception(4, new Date('2022-04-04'), [2, 3, 4], 4,'termine'),
    new Reception(5, new Date('2022-04-05'), [3, 4, 5], 5,'en-cours')
  ];

  getReception(){
    return this.receptions;
  }

  getReceptionbyId(id:number){
    return this.receptions.find(recep=> recep.id=id);
  }

  getReceptionbyProductName(pName:string){
    // return this.receptions.filter((reception)=>  )
  }

  getReceptioniByFournisseurName(fName:string){

  }
}
