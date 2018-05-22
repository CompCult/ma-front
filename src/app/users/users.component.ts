import { Component, OnInit } from '@angular/core';

import { NewUser } from './newUser.model';

import { User } from './user.model';
import { UserService } from './user.service';
import { NewUsersComponent } from './new-users/new-users.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  pesquisaButton ="Pesquisar por";
  pesquisaPAram ="name";


  users: User[];
  myData:any;
  bsModalRef: BsModalRef;

constructor(private modalService: BsModalService, private usuarioService: UserService) {}

create() {
  const initialState = {
    title: 'Criar Usuario',
    user: new NewUser(null,null,null,null),
    mensage: 'Usuario criado com sucesso',
    modify: false,
    password: ""
  };
  this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.atualizaLista();
      this.bsModalRef.hide();
      this.myData = myData;
  };


}

option(user: User) {
  const initialState = {
    title: 'Opçoes de Usuario',
    user: user,
    mensage: 'Usuario criado com sucesso',
    modify: true,
    password: ""
  };
  this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.atualizaLista();
      this.bsModalRef.hide();
      this.myData = myData;
  };
}

change(tipo: String){
  if(tipo == "name"){
    this.pesquisaButton ="nome";
    this.pesquisaPAram ="name";
  }else if( tipo == "email"){
    this.pesquisaPAram = "email";
    this.pesquisaButton= "email";
  }else{
    this.pesquisaPAram = "_id";
    this.pesquisaButton = "ID";
  }
}

atualizaLista(){
  this.delay(300);
  // delay para tempo de receber os valores do get
  setTimeout(() => {

  this.usuarioService.getUsuarios()
  .subscribe(users => this.users = users);

},300);

}

ngOnInit() {
  this.atualizaLista();
}

delay(ms: number) {
  setTimeout(() => { console.log('delay') },ms);
}

}
