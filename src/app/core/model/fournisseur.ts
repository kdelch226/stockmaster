export class Fournisseur {
    private _id: number;
    private _companyName: string;
    private _address: string;
    private _phoneNumber: string;
    private _email: string;
    private _produitsIds:number[];

    constructor(id: number, companyName: string, address: string, phoneNumber: string, email: string, produitsIds:number[]) {
        this._id = id;
        this._companyName = companyName;
        this._address = address;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._produitsIds= produitsIds;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    // Getter et setter pour 'companyName'
    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
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
    // Getters et setters pour les identifiants des fournisseurs

    get produitsIds(): number[] {
        return this._produitsIds;
    }

    set produitsIds(value: number[]) {
        this._produitsIds = value;
    }
}
