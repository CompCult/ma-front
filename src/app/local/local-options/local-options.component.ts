import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Local } from '../local.model';

import { LocalService } from '../local.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-options',
  templateUrl: './local-options.component.html',
  styleUrls: ['./local-options.component.css']
})
export class LocalOptionsComponent implements OnInit {


  title: string;
  closeBtnName: string;
  mensagem: string;
  local: Local;
  modify: boolean;
  onClose:any;
  

  constructor(public bsModalRef: BsModalRef, public localService: LocalService,private router: Router) {}


  create(localForm){

    this.localService.createLocal(this.local).subscribe();
    this.router.navigate(['local']);
    //função para enviar um objeto para o componete pai
    this.onClose(this.local);
  }

  modifyLocal(local: Local){
    console.log(this.local);

    this.localService.updateLocal(this.local, local._id).subscribe();
    //função para enviar um objeto para o componete pai
    this.onClose('');
  }

  deleteLocal(local: Local){
    console.log(this.local);

    this.localService.deleteLocal(this.local, local._id).subscribe();
    //função para enviar um objeto para o componete pai
    this.onClose('');
  }


  ngOnInit() {


  }



}
