import { Component, OnInit } from '@angular/core';

import { QuizAnswer } from './quizAnswer.model';
import {QuizAnswerService} from './quizAnswer.service'
import { EvaluationQuizComponent } from './evaluation-quiz/evaluation-quiz.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.css']
})
export class QuizAnswerComponent implements OnInit {


      quizAnswers: QuizAnswer[];
      myData:any;
      bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService, private quizAnswerService: QuizAnswerService) {}


    option(quizAnswer: QuizAnswer) {
      const initialState = {

        quizAnswer: quizAnswer,
        mensage: 'Usuario criado com sucesso',
        modify: true,
        password: ""
      };
      this.bsModalRef = this.modalService.show(EvaluationQuizComponent, {initialState});
      this.bsModalRef.content.closeBtnName = 'Close';

      // funcao que recebe valores do modal
      this.bsModalRef.content.onClose = (myData) => {
          this.updateList();
          this.bsModalRef.hide();
          this.myData = myData;
      };
    }

    updateList(){
      this.delay(300);
      // delay para tempo de receber os valores do get
      setTimeout(() => {

      this.quizAnswerService.getQuiz_answers()
      .subscribe(quizAnswers => this.quizAnswers = quizAnswers);

    },300);

    }

    ngOnInit() {
      this.updateList();
    }

    delay(ms: number) {
      setTimeout(() => { console.log('delay') },ms);
    }




    }
