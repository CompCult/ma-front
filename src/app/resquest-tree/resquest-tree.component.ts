import { Component, OnInit } from '@angular/core';

import { ResquestTree } from './resquest-tree.model';
import {ResquestTreeService} from './resquest-tree.service';

import { EvaluationnComponent } from './evaluationn/evaluationn.component';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-resquest-tree',
  templateUrl: './resquest-tree.component.html',
  styleUrls: ['./resquest-tree.component.css']
})
export class ResquestTreeComponent implements OnInit {

  bsModalRef: BsModalRef;
  resquest_trees: ResquestTree[] = [];

  constructor(private modalService: BsModalService, private resquestTreeService: ResquestTreeService) { }

  create() {
    const initialState = {
      title: 'Novo pedido',
      resquestTree: new ResquestTree(null,null,null,null,null,null,null,null),
      mensage: 'Objeto adicionado com sucesso',
      modify: false
    };
    this.bsModalRef = this.modalService.show(EvaluationnComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  option(resquest_trees: ResquestTree) {
    const initialState = {
      title: 'Avaliar pedido',
      resquestTree: resquest_trees,
      mensage: 'Objeto adicionado com sucesso',
      modify: true
    };
    this.bsModalRef = this.modalService.show(EvaluationnComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.ngOnInit()
  }

  getListaArvores(){
    this.resquestTreeService.getResquest_trees()
    .subscribe(resquest_trees => this.resquest_trees = resquest_trees);
  }

  ngOnInit() {
    this.getListaArvores();

  }



}
