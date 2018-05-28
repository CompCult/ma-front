import { Component, OnInit } from '@angular/core';

import { Quiz } from './newQuiz.model';
import {QuizService} from './quiz.service'
import { NewQuizComponent } from './new-quiz/new-quiz.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


    quizzes: Quiz[];
    myData:any;
    bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private quizService: QuizService) {}



  create() {
    const initialState = {
      title: 'Criar Novo Quiz',
      quiz: new Quiz(null,null,null,null,null,null,null,null,null,null,null,null,null,null),
      mensage: 'Quiz criado com sucesso',
      modify: false,
      password: ""
    };
    this.bsModalRef = this.modalService.show(NewQuizComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';

    // funcao que recebe valores do modal
    this.bsModalRef.content.onClose = (myData) => {
        this.updateList();
        this.bsModalRef.hide();
        this.myData = myData;
    };


  }

  option(quiz: Quiz) {
    const initialState = {
      title: 'Opçoes de Usuario',
      quiz: quiz,
      mensage: 'Usuario criado com sucesso',
      modify: true,
      password: ""
    };
    this.bsModalRef = this.modalService.show(NewQuizComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';

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

    this.quizService.getQuiz()
    .subscribe(quizzes => this.quizzes = quizzes);

    },1000);

  }

  ngOnInit() {
    this.updateList();
  }

  delay(ms: number) {
    setTimeout(() => { console.log('delay') },ms);
  }

  }
