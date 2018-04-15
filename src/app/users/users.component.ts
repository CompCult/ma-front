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

  users: User[] =[];


bsModalRef: BsModalRef;
constructor(private modalService: BsModalService, private usuarioService: UserService) {}

create() {
  const initialState = {
    title: 'Criar Usuario',
    user: new NewUser(null,null,null,null),
    mensage: 'Usuario criado com sucesso',
    modify: false
  };
  this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';
  this.atualizaLista();
}

option(user: User) {
  const initialState = {
    title: 'Opçoes de Usuario',
    user: user,
    mensage: 'Usuario criado com sucesso',
    modify: true
  };
  this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';
  this.atualizaLista();
}

atualizaLista(){
  this.usuarioService.getUsuarios()
  .subscribe(users => this.users = users);
}

ngOnInit() {
  this.atualizaLista();

}

}
