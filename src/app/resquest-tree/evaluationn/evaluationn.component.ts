import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ResquestTree } from '../resquest-tree.model';
import { ResquestTreeService } from '../resquest-tree.service';
import { TreeService} from '../../trees/tree.service'
import { Tree} from '../../trees/tree.model'


import { User} from '../../users/user.model'
import { UserService} from '../../users/user.service'

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
    onClose:any;

  constructor(public bsModalRef: BsModalRef, public resquestTreeService: ResquestTreeService,
    public treeService:TreeService, public userService: UserService) {

  }

  checking = false;
  checkType(){
    if(this.resquestTree.place == "calcada" ){
      this.checking= true;
    }else{
      this.checking =false;
    }
  }





  create(resquestForm){
    console.log(this.resquestTree);
    this.resquestTreeService.createResquest(this.resquestTree).subscribe();
    ;

    this.onClose('');
  }


  reject(resquestTree: ResquestTree){
      this.resquestTree.status ="Rejeitado"
      console.log(this.resquestTree);
      this.resquestTreeService.delete(this.resquestTree, resquestTree._id).subscribe();


      this.onClose('');
    }


    approve(resquestTree: ResquestTree){
      this.resquestTree.status ="Aprovado"
      this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();



      this.onClose('');
    }




    delete(resquestTree: ResquestTree){

      console.log(this.resquestTree);
      this.resquestTreeService.delete(this.resquestTree, resquestTree._id).subscribe();

      //função para enviar um objeto para o componete pai


        this.onClose('');
      }


  trees: Tree[]
  users : User[]
  ngOnInit() {
    this.treeService.getObjetos()
    .subscribe(trees => this.trees = trees);
    this.userService.getUsuarios()
    .subscribe(users => this.users = users);
  }
}
