import { Component, OnInit,TemplateRef } from '@angular/core';

import { ResquestTree, NewResquestTree } from './resquest-tree.model';
import {ResquestTreeService} from './resquest-tree.service';

import { UserService } from '../users/user.service';
import { User } from '../users/user.model';

import { EvaluationnComponent } from './evaluationn/evaluationn.component';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-resquest-tree',
  templateUrl: './resquest-tree.component.html',
  styleUrls: ['./resquest-tree.component.css']
})
export class ResquestTreeComponent implements OnInit {



  myData:any;
  bsModalRef: BsModalRef;
  modalRef: BsModalRef;
  resquest_trees: ResquestTree[] = [];

  constructor(private modalService: BsModalService, private resquestTreeService: ResquestTreeService, private userService: UserService) { }

  create() {
    const initialState = {
      title: 'Novo pedido',
      resquestTree: new NewResquestTree(null,null,null,null),
      mensage: 'Objeto adicionado com sucesso',
      modify: false
    };
    this.bsModalRef = this.modalService.show(EvaluationnComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';


    this.bsModalRef.content.onClose = (myData) => {
        this.updateList();
        this.bsModalRef.hide();
        this.myData = myData;
    };

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
    this.bsModalRef.content.onClose = (myData) => {
        this.updateList();
        this.bsModalRef.hide();
        this.myData = myData;
    };
  }

  getListaArvores(){
    this.resquestTreeService.getResquest_trees()
    .subscribe(resquest_trees => this.resquest_trees = resquest_trees);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  toNumber(string) {
    return parseFloat(string);
  }

  ngOnInit() {
    this.getListaArvores();

  }


  updateList(){
    this.delay(1000);
    // delay para tempo de receber os valores do get
    setTimeout(() => {

    this.resquestTreeService.getResquest_trees()
    .subscribe(resquest_trees => this.resquest_trees = resquest_trees);

    },1000);

  }


  delay(ms: number) {
    setTimeout(() => { console.log('delay') },ms);
  }




}
