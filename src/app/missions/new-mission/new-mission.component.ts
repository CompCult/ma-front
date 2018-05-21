import { Component, OnInit } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Mission } from '../mission.model';

import { MissionService } from '../mission.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.css']
})
export class NewMissionComponent implements OnInit {


      title: string;
      closeBtnName: string;
      mensagem: string;
      mission: Mission;
      modify: boolean;
      onClose:any;
      password:string ="";

      constructor(public bsModalRef: BsModalRef, public missionService: MissionService, private router: Router) {}

      create(missionForm){

        this.missionService.createMissions(this.mission).subscribe();
        this.router.navigate(['mission']);
        //função para enviar um objeto para o componete pai
        this.onClose(this.mission);
      }

      modifymission(mission: Mission){
        console.log(this.mission);
        this.missionService.updateMissions(this.mission, mission._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }

      delete(mission: Mission){

        console.log(this.mission);
        this.missionService.deleteMissions(this.mission, mission._id).subscribe();

        //função para enviar um objeto para o componete pai
        this.onClose('');
      }


      ngOnInit() {


      }

      isPublic(isPublic:boolean){
        if (this.mission.is_public == true){
          return "true";
        }else{
          return "false";
        }
      }

    }
