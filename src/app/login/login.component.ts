import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoginService, FinalUser } from './login.service';
import { ErrorHandler } from '../app.error-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FinalUser = new FinalUser();
  error: boolean;

  constructor(private loginService: LoginService,private cdref: ChangeDetectorRef, private errorHandler:ErrorHandler) { }


  login(){
    this.loginService.login(this.user).subscribe(credential =>
    this.loginService.createSession(credential)
    );

    this.loginService.showErrorEmitter.subscribe(error => {
      this.error = error;
      this.cdref.detectChanges();
    })


  }

  ngOnInit() {
    this.loginService.loggout();
  }

}
