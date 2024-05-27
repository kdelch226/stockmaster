import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Produit } from '../../core/model/produit';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProduitModalComponent } from '../produit-modal/produit-modal.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  @Input() product!:Produit;
  bsModalRef?: BsModalRef;
  format='';

  constructor(private modalService:BsModalService){}

  ngOnInit(): void {
    this.format = this.product.getUnitType()== 'caisse' ? ('lot de : ' + this.product.getUnitQuantity()) : this.product.getUnitType();
  }


  OpenProduitInfoModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      backdrop:'static',
      initialState: {product:this.product}
    };
    this.bsModalRef = this.modalService.show(ProduitModalComponent, modalOptions);
  }
}
