import { Component, OnInit } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Quiz } from '../newQuiz.model';

import { QuizService } from '../quiz.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent implements OnInit {


    title: string;
    closeBtnName: string;
    mensagem: string;
    quiz: Quiz;
    modify: boolean;
    onClose:any;
    password:string ="";

    constructor(public bsModalRef: BsModalRef, public quizService: QuizService, private router: Router) {}

    create(userForm){

      this.quizService.createQuiz(this.quiz).subscribe();
      this.router.navigate(['quiz']);
      //função para enviar um objeto para o componete pai
      this.onClose(this.quiz);
    }

    modifyUserUsuario(quiz: Quiz){
      console.log(this.quiz);
      this.quizService.updateQuiz(this.quiz, quiz._id).subscribe();
      //função para enviar um objeto para o componete pai
      this.onClose('');
    }

    delete(quiz: Quiz){

      console.log(this.quiz);
      this.quizService.deleteQuiz(this.quiz, quiz._id).subscribe();

      //função para enviar um objeto para o componete pai
      this.onClose('');
    }


    ngOnInit() {


    }



  }
