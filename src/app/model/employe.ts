export class Employe {
    private _id: number;
    private _name: string;
    private _address: string;
    private _phoneNumber: string;
    private _email: string;
    private _dateEmbauche: Date;
    private _post: string;
    private _etat: string;

    constructor(id: number, name: string, address: string, phoneNumber: string, email: string, dateEmbauche: Date, post: string, etat: string) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._dateEmbauche = dateEmbauche;
        this._post = post;
        this._etat = etat;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    // Getter et setter pour 'name'
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // Getter et setter pour 'address'
    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    // Getter et setter pour 'phoneNumber'
    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    // Getter et setter pour 'email'
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    // Getter et setter pour 'dateEmbauche'
    get dateEmbauche(): Date {
        return this._dateEmbauche;
    }

    set dateEmbauche(value: Date) {
        this._dateEmbauche = value;
    }

    // Getter et setter pour 'post'
    get post(): string {
        return this._post;
    }

    set post(value: string) {
        this._post = value;
    }

    // Getter et setter pour 'etat'
    get etat(): string {
        return this._etat;
    }

    set etat(value: string) {
        this._etat = value;
    }
}
