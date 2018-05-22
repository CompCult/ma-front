import { Component, OnInit,TemplateRef } from '@angular/core';

import { MissionAnswer } from './missionAnswer.model';
import { MissionAnswerService } from './missionAnswer.service'

import { EvaluationMissionComponent } from './evaluation-mission/evaluation-mission.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-mission-answer',
  templateUrl: './mission-answer.component.html',
  styleUrls: ['./mission-answer.component.css']
})
export class MissionAnswerComponent implements OnInit {

  missionAnswers: MissionAnswer[];
  myData:any;
  bsModalRef: BsModalRef;
  modalRef: BsModalRef;

constructor(private modalService: BsModalService, private missionAnswerService: MissionAnswerService) {}


option(missionAnswer: MissionAnswer) {
  const initialState = {
    title: 'Opçoes de Missões',
    missionAnswer: missionAnswer,
    mensage: 'Missoes criado com sucesso',
    modify: true,
    password: ""
  };
  this.bsModalRef = this.modalService.show(EvaluationMissionComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.updateList();
      this.bsModalRef.hide();
      this.myData = myData;
  };
}

updateList(){
  this.delay(1000);
  // delay para tempo de receber os valores do get
  setTimeout(() => {

  this.missionAnswerService.getMissionAnswer()
  .subscribe(missionAnswers => this.missionAnswers = missionAnswers);

  },1000);

}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

toNumber(string) {
  return parseFloat(string);
}

delay(ms: number) {
  setTimeout(() => { console.log('delay') },ms);
}

ngOnInit() {
  this.updateList();
}



}
