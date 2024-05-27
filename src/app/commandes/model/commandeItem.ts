import { Produit } from "../../core/model/produit";

export class CommandeItem{
    private _produit:Produit;
    private _quantity:number;


    constructor(produitt:Produit,quantityy:number){
        this._produit=produitt;
        this._quantity=quantityy
    }

    set produit(valu:Produit){
        this._produit=valu
    }
    
    get produit(){
        return this._produit
    }

    set quantity(valu:number){
        this._quantity=valu
    }
    
    get quantity(){
        return this._quantity
    }


    Getprice(){
        return this._produit.getPrice()*this._quantity;
    }
}