import { Produit } from "../../core/model/produit";
import { CommandeItem } from "./commandeItem";

export class CommandePanier{

    private commandeItems:CommandeItem[]=[]

    GetTotalprice(){
        let  totalPrice=0;
        this.commandeItems.forEach(item=>{
            totalPrice+=item.Getprice()}
        )
        return totalPrice;
    }

    get commandesItems () {
        return this.commandeItems;
    }

    set commandesItems(value:CommandeItem[]){
        this.commandeItems=value;
    }
}
