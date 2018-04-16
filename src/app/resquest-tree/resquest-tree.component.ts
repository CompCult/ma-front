import { Component, OnInit } from '@angular/core';

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

  bsModalRef: BsModalRef;
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

  }

  option(resquest_trees: ResquestTree) {
    let resquest_treesE = this.getEndereco(resquest_trees);
    const initialState = {
      title: 'Avaliar pedido',
      resquestTree: resquest_treesE,
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


  getEndereco(resquest_trees: ResquestTree){
    let user: User;
    this.userService.getUser(resquest_trees._user).subscribe(user => user = user);
    console.log(user)
    resquest_trees.zipcode =user.zipcode;
    resquest_trees.state =user.state;
    resquest_trees.street =user.street;
    resquest_trees.number =user.number;
    resquest_trees.neighborhood =user.neighborhood;
    resquest_trees.complement =user.complement;
    console.log(resquest_trees);
    return resquest_trees;
  }


}
