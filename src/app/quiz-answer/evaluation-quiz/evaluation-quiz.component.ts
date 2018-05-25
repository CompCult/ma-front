import { Component, OnInit } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuizAnswer } from '../quizAnswer.model';

import { QuizAnswerService } from '../quizAnswer.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-quiz',
  templateUrl: './evaluation-quiz.component.html',
  styleUrls: ['./evaluation-quiz.component.css']
})
export class EvaluationQuizComponent implements OnInit {


      title: string;
      closeBtnName: string;
      mensagem: string;
      quizAnswer: QuizAnswer;

      onClose:any;


      constructor(public bsModalRef: BsModalRef, public quizAnswerService: QuizAnswerService, private router: Router) {}


      accept(quizAnswer: QuizAnswer){
        console.log(this.quizAnswer);

        this.quizAnswerService.updateQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }

      reject(quizAnswer: QuizAnswer){
        console.log(this.quizAnswer);
        
        this.quizAnswerService.updateQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }


      delete(quizAnswer: QuizAnswer){

        console.log(this.quizAnswer);
        this.quizAnswerService.deleteQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();

        //função para enviar um objeto para o componete pai
        this.onClose('');
      }


      ngOnInit() {


      }



    }
