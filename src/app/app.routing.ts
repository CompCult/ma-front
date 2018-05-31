import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TreesComponent } from './trees/trees.component';
import { MapComponent } from './map/map.component';
import { QuizComponent} from './quiz/quiz.component'
import { QuizAnswerComponent} from './quiz-answer/quiz-answer.component'
import { MissionsComponent } from './missions/missions.component'
import { MissionAnswerComponent} from './mission-answer/mission-answer.component'
import { InitialPageComponent } from './initial-page/initial-page.component'
import { LocalComponent} from './local/local.component'

import { ResquestTreeComponent } from './resquest-tree/resquest-tree.component';
import { AuthGuard } from './login/auth.guard';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentRequestComponent } from './appointment-request/appointment-request.component';
import { IndexComponent } from './index/index.component';


const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent},
  { path: 'initial_page', component: InitialPageComponent, canActivate: [AuthGuard]},
  { path: 'local', component: LocalComponent, canActivate: [AuthGuard]},
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
  { path: 'quizAnswer', component: QuizAnswerComponent, canActivate: [AuthGuard]},
  { path: 'missson', component: MissionsComponent, canActivate: [AuthGuard]},
  { path: 'missionAnswer', component: MissionAnswerComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'resquestTree', component: ResquestTreeComponent, canActivate: [AuthGuard] },
  { path: 'trees', component: TreesComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'appointment', component: AppointmentsComponent, canActivate: [AuthGuard] },
  { path: 'Appointmentrequest', component: AppointmentRequestComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
