export class Produit {
    private id: string;
    private name: string;
    private description: string;
    private price: number;
    private quantityInStock: number;
    private unitType: string;
    private unitQuantity: number;
    private fournisseurId: number ;
    private image: string ;

    constructor(id: string, name: string, description: string, price: number, quantityInStock: number, unitType: string, unitQuantity: number, fournisseurId: number , image: string ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantityInStock = quantityInStock;
        this.unitType = unitType;
        this.unitQuantity = unitQuantity;
        this.fournisseurId = fournisseurId;
        this.image = image;
    };

    getId(): string {
        return this.id;
    };

    setId(value: string): void {
        this.id = value;
    };

    getName(): string {
        return this.name;
    };

    setName(value: string): void {
        this.name = value;
    };

    getDescription(): string {
        return this.description;
    };

    setDescription(value: string): void {
        this.description = value;
    };

    getPrice(): number {
        return this.price;
    };

    setPrice(value: number): void {
        this.price = value;
    };

    getQuantityInStock(): number {
        return this.quantityInStock;
    };

    setQuantityInStock(value: number): void {
        this.quantityInStock = value;
    };

    getUnitType(): string {
        return this.unitType;
    };

    setUnitType(value: string): void {
        this.unitType = value;
    };

    getUnitQuantity(): number {
        return this.unitQuantity;
    };

    setUnitQuantity(value: number): void {
        this.unitQuantity = value;
    };

    getFournisseurId(): number {
        return this.fournisseurId;
    };

    setFournisseurId(value: number): void {
        this.fournisseurId = value;
    };

    getImage(): string  {
        return this.image;
    };

    setImage(value: string ): void {
        this.image = value;
    };
}
