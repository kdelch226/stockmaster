export class Client {
    private _id: string;
    private _name: string;
    private _address: string;
    private _phoneNumber: string;
    private _email: string;
    private _type: string;

    constructor(id: string, name: string, address: string, phoneNumber: string, email: string, type: string) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._type = type;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
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

    // Getter et setter pour 'email'
    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}
