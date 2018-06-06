import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ResquestTree } from '../resquest-tree.model';
import { ResquestTreeService } from '../resquest-tree.service';
import { TreeService} from '../../trees/tree.service'
import { Tree} from '../../trees/tree.model'

import { Local} from '../../local/local.model'


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
    if(this.resquestTree.place == "Calçada Estreita" || this.resquestTree.place == "Calçada Média" || this.resquestTree.place == "Calçada Grande"  ){
      this.checking= true;
    }else{
      this.checking =false;
    }
  }

  local: Local[] = []
  checkTypePlace(){
    console.log("passou aki")
    //this.local = tree._places;
  }






  create(resquestForm){
    console.log(this.resquestTree);
    this.userService.getUser(this.resquestTree._user)
    .subscribe(tree => this.resquestTree._user = tree);



    this.resquestTreeService.createResquest(this.resquestTree).subscribe();


    this.onClose('');
  }


  reject(resquestTree: ResquestTree){
      this.resquestTree.status ="Rejeitado"

      console.log(this.resquestTree);
      this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();


      this.onClose('');
    }

    pedant(resquestTree: ResquestTree){
        this.resquestTree.status ="Pendente"

        console.log(this.resquestTree);
        this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();


        this.onClose('');
      }


    approve(resquestTree: ResquestTree){
      this.resquestTree.status ="Aprovado"

      this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();



      this.onClose('');
    }


    planting(resquestTree: ResquestTree){
        this.resquestTree.status ="Plantada"
      this.resquestTreeService.update(this.resquestTree, resquestTree._id).subscribe();



      this.onClose('');
    }




    delete(resquestTree: ResquestTree){

      console.log(this.resquestTree);
      this.resquestTreeService.delete(this.resquestTree, resquestTree._id).subscribe();

      //função para enviar um objeto para o componete pai


        this.onClose('');
      }
      treeName= "Árvore"

      add(tree: Tree){
        this.treeName = tree.name;
        this.resquestTree._type = tree._id;
        this.local = tree._places;
      }




      treeLugar = "Lugar"

      addPlace(place: Local){
        this.treeLugar = place.name;
        this.resquestTree.place = place.name;
      }



  trees: Tree[]
  users : User[]
  ngOnInit() {

    this.treeService.getObjetos()
    .subscribe(trees => this.trees = trees);
    this.userService.getUsuarios()
    .subscribe(users => this.users = users);


    if(this.modify){

          this.treeLugar = this.resquestTree.place
          this.treeService.getObjeto(this.resquestTree._type)
          .subscribe(tree => this.treeName = tree.name);
        }


}
}
