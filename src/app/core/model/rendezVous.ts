export class RendezVous {
    private _id: number;
    private _date: Date;
    private _lieu: string;
    private _description: string;
    private _personne: string;
    private _etat: string;

    constructor(id: number, personne: string, date: Date, lieu: string, description: string, etat: string) {
        this._id = id;
        this._personne = personne;
        this._date = date;
        this._lieu = lieu;
        this._description = description;
        this._etat = etat;
    }

    // Getters et setters pour chaque propriété
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get personne(): string {
        return this._personne;
    }

    set personne(value: string) {
        this._personne = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get lieu(): string {
        return this._lieu;
    }

    set lieu(value: string) {
        this._lieu = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get etat(): string {
        return this._etat;
    }

    set etat(value: string) {
        this._etat = value;
    }
}
