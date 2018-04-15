import { Component, OnInit } from '@angular/core';

import { Tree } from './tree.model';
import {TreeService} from './tree.service';

import { NewTreeComponent } from './new-tree/new-tree.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent implements OnInit {

  bsModalRef: BsModalRef;
  trees: Tree[] = [];

  constructor(private modalService: BsModalService, private treeService: TreeService) { }

  create() {
    const initialState = {
      title: 'Criar Objeto',
      tree: new Tree(null,null,null,null,null),
      mensage: 'Objeto adicionado com sucesso',
      modify: false
    };
    this.bsModalRef = this.modalService.show(NewTreeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    
  }

  option(tree: Tree) {
    const initialState = {
      title: 'Criar Objeto',
      tree: tree,
      mensage: 'Objeto adicionado com sucesso',
      modify: true
    };
    this.bsModalRef = this.modalService.show(NewTreeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.ngOnInit()
  }

  getListaArvores(){
    this.treeService.getObjetos()
    .subscribe(trees => this.trees = trees);
  }

  ngOnInit() {
    this.getListaArvores();

  }


}
