import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Tree } from '../tree.model';
import { TreeService } from '../tree.service';


import {Local } from '../../local/local.model'
import {LocalService } from '../../local/local.service'

import{ NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-tree',
  templateUrl: './new-tree.component.html',
  styleUrls: ['./new-tree.component.css']
})
export class NewTreeComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensage: string;
  tree: Tree;
  modify: boolean;

  constructor(public bsModalRef: BsModalRef, public treeService: TreeService, public localService: LocalService) {

  }

  create(treeForm){
    console.log(this.tree);
    this.tree._places =this.place;
    this.treeService.createTree(this.tree).subscribe();
    this.bsModalRef.hide();
  }

  delete(tree: Tree){
      console.log(this.tree);
      this.treeService.deleteTree(this.tree, tree._id).subscribe();
      this.bsModalRef.hide();

}
    modifyTree(tree: Tree){
        this.tree._places =this.place;
      this.treeService.updateTree(this.tree, tree._id).subscribe();
      this.bsModalRef.hide();
    }

    place: Local[] = [];

    add(locais){
      console.log(locais)
      this.place.push(locais);
    }

    removerLocal(IDLocal: Local){
      let placeAux: Local[] = [];
      for(let i = 0; i <= this.place.length; i++){
        if(<Local>IDLocal == this.place[i]){

        }else{
          placeAux.push( this.place[i])
        }
      }
      this.place = placeAux;
    }


  locals: Local[];
  ngOnInit() {
    console.log(this.tree)
    if(this.modify){
      this.place = this.tree._places;
    }
    this.localService.getLocal()
    .subscribe(locals => this.locals = locals);

  }

}
