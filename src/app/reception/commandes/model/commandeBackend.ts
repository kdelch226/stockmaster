
export class CommandeBackend {
    private _id: string;
    private _dateCommande: Date;
    private _dateLivraison: Date;
    private _dateUpdate: Date | undefined;
    private _produitIds: [string, number] [];
    private _prixCommande:number;
    private _clientName: string;
    private _lieu: string;
    private _statut: string;
  
    constructor(id: string, dateCommande: Date, dateLivraison: Date,dateUpdate: Date | undefined,_produitIds: [string, number][],prixCommande:number, clientName: string, lieu:string,statut: string) {
      this._id = id;
      this._dateCommande = dateCommande;
      this._dateLivraison = dateLivraison;
      this._dateUpdate=dateUpdate;
      this._produitIds = _produitIds;
      this._prixCommande=prixCommande;
      this._clientName = clientName;
      this._lieu=lieu
      this._statut = statut;
    }
  
    // Getters et setters pour chaque propriété
    get id(): string {
      return this._id;
    }
  
    set id(value: string) {
      this._id = value;
    }
  
    get dateCommande(): Date {
      return this._dateCommande;
    }
  
    set dateCommande(value: Date) {
      this._dateCommande = value;
    }

    get dateLivraison(): Date | undefined {
      return this._dateLivraison;
    }
  
    set dateLivraison(value: Date) {
      this._dateLivraison = value;
    }
  
    get dateUpdate(): Date | undefined {
      return this._dateUpdate;
    }
  
    set dateUpdate(value: Date) {
      this._dateUpdate = value;
    }

    get produitIds():[string, number][] {
      return this._produitIds;
    }
  
    set produitIds(value: [string, number][]) {
      this._produitIds = value;
    }
    get prixCommande(): number {
      return this._prixCommande;
    }
  
    set prixCommande(value: number) {
      this._prixCommande = value;
    }
  
    get client(): string {
      return this._clientName;
    }
  
    set client(value: string) {
      this._clientName = value;
    }

    get lieu(): string {
      return this._lieu;
    }
  
    set lieu(value: string) {
      this._lieu = value;
    }
  
    get statut(): string {
      return this._statut;
    }
  
    set statut(value: string) {
      this._statut = value;
    }
  }
  