import { Client } from "./client";
import { Produit } from "./produit";

export class Commande {
    private _id: number;
    private _date: Date;
    private _produits: number[];
    private _clientId: number;
    private _statut: string;
  
    constructor(id: number, date: Date, produits: number[], clientId: number, statut: string) {
      this._id = id;
      this._date = date;
      this._produits = produits;
      this._clientId = clientId;
      this._statut = statut;
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
      return this._produits;
    }
  
    set produits(value: number[]) {
      this._produits = value;
    }
  
    get client(): number {
      return this._clientId;
    }
  
    set client(value: number) {
      this._clientId = value;
    }
  
    get statut(): string {
      return this._statut;
    }
  
    set statut(value: string) {
      this._statut = value;
    }
  }
  