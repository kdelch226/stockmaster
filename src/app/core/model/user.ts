export class User {
    private _id: number;
    private _email: string;
    private _name: string;
    private _prename: string;
    private _password: string;

    constructor(id: number,email: string, name: string, prename: string, password: string ) {
        this._id = id;
        this._email = email;
        this._name = name;
        this._prename = prename;
        this._password = password;
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

    // Getter et setter pour 'prename'
    get prename(): string {
        return this._prename;
    }

    set prename(value: string) {
        this._prename = value;
    }

    // Getter et setter pour 'password'
    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    // Getter et setter pour 'email'
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
