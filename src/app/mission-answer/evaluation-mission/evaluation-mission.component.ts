import { Component, OnInit, TemplateRef } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MissionAnswer } from '../missionAnswer.model';

import { MissionAnswerService } from '../missionAnswer.service';





import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluation-mission',
  templateUrl: './evaluation-mission.component.html',
  styleUrls: ['./evaluation-mission.component.css']
})
export class EvaluationMissionComponent implements OnInit {

        title: string;
        closeBtnName: string;
        mensagem: string;
        missionAnswer: MissionAnswer;
        modify: boolean;
        onClose:any;
        password:string ="";

        constructor(public bsModalRef: BsModalRef, public missionAnswerService: MissionAnswerService, private router: Router, private modalService: BsModalService) {}

        create(missionAnswerForm){

          this.missionAnswerService.createMissionAnswer(this.missionAnswer).subscribe();
          this.router.navigate(['mission']);
          //função para enviar um objeto para o componete pai
          this.onClose(this.missionAnswer);
        }

        modifyUserUsuario(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        delete(missionAnswer: MissionAnswer){

          console.log(this.missionAnswer);
          this.missionAnswerService.deleteMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();

          //função para enviar um objeto para o componete pai
          this.onClose('');
        }


        accept(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          missionAnswer.status = "valido";
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        reject(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          missionAnswer.status = "invalido";
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        toNumber(string) {
          return parseFloat(string);
        }




        modalRef: BsModalRef;

        openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
        }




        ngOnInit() {
        }

      }
