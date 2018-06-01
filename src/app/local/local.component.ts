import { Component, OnInit } from '@angular/core';

import { Local } from './local.model';
import {LocalService} from './local.service'
import { LocalOptionsComponent } from './local-options/local-options.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {


  locals: Local[];
  myData:any;
  bsModalRef: BsModalRef;
  atualiza:boolean;

constructor(private modalService: BsModalService, private LocalService: LocalService) {}



create() {
  const initialState = {
    title: 'Criar Novo Local',
    local: new Local(null,null,null,null),
    mensage: 'Local criado com sucesso',
    modify: false,
    password: ""
  };
  this.bsModalRef = this.modalService.show(LocalOptionsComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Fechar';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.updateList();
      this.bsModalRef.hide();
      this.myData = myData;
  };


}

option(local: Local) {

  const initialState = {
    title: 'Opçoes de Locais',
    local: local,
    mensage: 'Usuario criado com sucesso',
    modify: true,
    password: ""
  };
  this.bsModalRef = this.modalService.show(LocalOptionsComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Fechar';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.updateList();
      this.bsModalRef.hide();
      this.myData = myData;
  };
}

updateList(){
  // delay para tempo de receber os valores do get
  setTimeout(() => {

  this.LocalService.getLocal()
  .subscribe(locals => this.locals = locals);

  },1000);

}

atualizaAutomatico(){
  if(this.atualiza){
   setTimeout(() => {
     this.updateList();
     this.atualizaAutomatico();
   },20000);
   }
}

ngOnInit() {
  this.updateList();
  this.atualiza = true;
  this.atualizaAutomatico();
}

ngOnDestroy() {
  this.atualiza = false;
}

}
