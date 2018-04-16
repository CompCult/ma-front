import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ResquestTree } from '../resquest-tree.model';
import { ResquestTreeService } from '../resquest-tree.service';

import{ NgForm } from '@angular/forms';


@Component({
  selector: 'app-evaluationn',
  templateUrl: './evaluationn.component.html',
  styleUrls: ['./evaluationn.component.css']
})
export class EvaluationnComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensage: string;
  resquestTree: ResquestTree;
  modify: boolean;

  constructor(public bsModalRef: BsModalRef, public resquestTreeService: ResquestTreeService) {

  }

  create(resquestForm){
    console.log(this.resquestTree);
    this.resquestTreeService.createResquest(this.resquestTree).subscribe();
    this.bsModalRef.hide();
  }

  reject(resquestTree: ResquestTree){
      this.resquestTree.status ="Rejeitado"
      console.log(this.resquestTree);
      this.resquestTreeService.delete(this.resquestTree, resquestTree._id).subscribe();
      this.bsModalRef.hide();

}
    approve(resquestTree: ResquestTree){
      this.resquestTree.status ="Aprovado"
      this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();
      this.bsModalRef.hide();
    }


  ngOnInit() {

  }
}
