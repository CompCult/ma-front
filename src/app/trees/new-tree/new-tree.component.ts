import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Tree } from '../tree.model';
import { TreeService } from '../tree.service';

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

  constructor(public bsModalRef: BsModalRef, public treeService: TreeService) {

  }

  create(treeForm){
    console.log(this.tree);
    this.treeService.createTree(this.tree).subscribe();
    this.bsModalRef.hide();
  }

  delete(tree: Tree){
      console.log(this.tree);
      this.treeService.deleteTree(this.tree, tree._id).subscribe();
      this.bsModalRef.hide();

}
    modifyTree(tree: Tree){
      this.treeService.updateTree(this.tree, tree._id).subscribe();
      this.bsModalRef.hide();
    }





  ngOnInit() {
  }

}
