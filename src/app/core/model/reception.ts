import { Produit } from "./produit";

export class Reception {
    private _id: number;
    private _date: Date;
    private _produitsIds: number[];
    private _fournisseurId: number; 
    private _status:string
  
    constructor(id: number, date: Date, produits: number[], fournisseurId:number,status:string) {
      this._id = id;
      this._date = date;
      this._produitsIds = produits;
      this._fournisseurId= fournisseurId;
      this._status=status;
    }
  
    // Getters et setters pour chaque propriété
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get date(): Date {
      return this._date;
    }
  
    set date(value: Date) {
      this._date = value;
    }
  
    get produits(): number[] {
      return this._produitsIds;
    }
  
    set produits(value: number[]) {
      this._produitsIds = value;
    }

    get fournisseurId(): number {
        return this._fournisseurId;
      }
    
      set fournisseurId(value: number) {
        this._fournisseurId = value;
      }

      get status(): string {
        return this._status;
      }
    
      set status(value: string) {
        this._status = value;
      }
    
  }