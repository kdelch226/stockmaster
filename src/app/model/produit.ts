export class Produit {
    private _id: number;
    private _name: string;
    private _format: string;
    private _description: string;
    private _price: number;
    private _quantityInStock: number;
    private _fournisseursIds:number [] | null;
    private _image:string;

    constructor(id: number, name: string, format: string, description: string, price: number, quantityInStock: number, fournisseursIds:number[]|null,image:string) {
        this._id = id
        this._name = name;
        this._format = format;
        this._description = description;
        this._price = price;
        this._quantityInStock = quantityInStock;
        this._fournisseursIds = fournisseursIds;
        this._image=image;
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

    // Getter et setter pour 'format'
    get format(): string {
        return this._format;
    }

    set format(value: string) {
        this._format = value;
    }

    // Getter et setter pour 'description'
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    // Getter et setter pour 'price'
    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    // Getter et setter pour 'quantityInStock'
    get quantityInStock(): number {
        return this._quantityInStock;
    }

    set quantityInStock(value: number) {
        this._quantityInStock = value;
    }

    // Getters et setters pour les identifiants des fournisseurs

    get fournisseursIds(): number[] | null {
        return this._fournisseursIds;
    }

    set fournisseursIds(value: number[] | null) {
        this._fournisseursIds = value;
    }

    
    // Getter et setter pour 'name'
    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}
