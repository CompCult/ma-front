import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../user.model';

import { UserService } from '../user.service';


import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  user: User;
  modify: boolean;

  password:string ="";


  constructor(public bsModalRef: BsModalRef, public userService: UserService) {}

  create(userForm){
    if(this.password != ""){
      this.user.password= this.password;
    }
    console.log(this.user);
    this.userService.createUser(this.user).subscribe();
    this.bsModalRef.hide();

  }

  modifyUserUsuario(user: User){
    console.log(this.user);
    if(this.password!= ""){
      this.user.password= this.password;
    }

    this.userService.updateUser(this.user, user._id).subscribe();
    this.bsModalRef.hide();
  }

  delete(user: User){

    console.log(this.user);
    this.userService.deleteUser(this.user, user._id).subscribe();
    this.bsModalRef.hide();
  }


  ngOnInit() {


  }



}
