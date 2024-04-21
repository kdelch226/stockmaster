
export class Tache {
    private _id: number;
    private _description: string;
    private _dateDebut: Date;
    private _dateFin: Date;
    private _etat: string;
  
    constructor(id: number, description: string, dateDebut: Date, dateFin: Date, etat: string) {
      this._id = id;
      this._description = description;
      this._dateDebut = dateDebut;
      this._dateFin = dateFin;
      this._etat = etat;
    }
  
    // Getters et setters pour chaque propriété
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  
    get dateDebut(): Date {
      return this._dateDebut;
    }
  
    set dateDebut(value: Date) {
      this._dateDebut = value;
    }
  
    get dateFin(): Date {
      return this._dateFin;
    }
  
    set dateFin(value: Date) {
      this._dateFin = value;
    }
  
    get etat(): string {
      return this._etat;
    }
  
    set etat(value: string) {
      this._etat = value;
    }
  }
  