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
  status:Boolean = true;

  constructor(private modalService: BsModalService, private treeService: TreeService) { }

  create() {
    const initialState = {
      title: 'Criar Árvore',
      tree: new Tree(null,null,null,null,null),
      mensage: 'Árvore adicionada com sucesso',
      modify: false
    };
    this.bsModalRef = this.modalService.show(NewTreeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';

  }

  option(tree: Tree) {
    const initialState = {
      title: 'Opções Árvore',
      tree: tree,
      mensage: 'Objeto adicionado com sucesso',
      modify: true
    };
    this.bsModalRef = this.modalService.show(NewTreeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
    this.ngOnInit()
  }

  getListaArvores(){
    this.treeService.getObjetos()
    .subscribe(trees => this.trees = trees);
  }

  markerIconTreeUrl() {
      if(this.status == true){
        return "../assets/img/pin_green.png";
      }else if(this.status == false){
        return '../assets/img/pin_red_map.png';
      }else{
        return '../assets/img/pin_yellow_map.png';
      }

     }

  ngOnInit() {
    this.getListaArvores();

  }


}
