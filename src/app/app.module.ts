import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { routing } from './app.routing';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { NewUsersComponent } from './users/new-users/new-users.component';
import { TreesComponent } from './trees/trees.component';
import { NewTreeComponent } from './trees/new-tree/new-tree.component';
import { ResquestTreeComponent } from './resquest-tree/resquest-tree.component';
import { PanelComponent } from './panel/panel.component';

import { UserService } from './users/user.service'
import { TreeService } from './trees/tree.service'
import { MapService } from './map/map.service'
import { LoginService } from './login/login.service'
import { QuizService } from './quiz/quiz.service'
import { ResquestTreeService } from './resquest-tree/resquest-tree.service';
import { QuizAnswerService } from './quiz-answer/quizAnswer.service'
import { AuthGuard } from './login/auth.guard';

import { MapComponent } from './map/map.component';
import { EvaluationnComponent } from './resquest-tree/evaluationn/evaluationn.component';

import { QuizComponent } from './quiz/quiz.component';
import { NewQuizComponent } from './quiz/new-quiz/new-quiz.component';
import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';
import { EvaluationQuizComponent } from './quiz-answer/evaluation-quiz/evaluation-quiz.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    NewUsersComponent,
    TreesComponent,
    NewTreeComponent,
    ResquestTreeComponent,
    PanelComponent,
    MapComponent,
    EvaluationnComponent,
    QuizComponent,
    NewQuizComponent,
    QuizAnswerComponent,
    EvaluationQuizComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0'
    })
  ],
  providers: [
    UserService,
    TreeService,
    ResquestTreeService,
    MapService,
    LoginService,
    QuizService,
    QuizAnswerService,
    AuthGuard
  ],
  entryComponents:[
    NewUsersComponent,
    NewTreeComponent,
    EvaluationnComponent,
    NewQuizComponent,
    EvaluationQuizComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
