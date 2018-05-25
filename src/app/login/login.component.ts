import { Component, OnInit } from '@angular/core';

import { LoginService, FinalUser } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FinalUser = new FinalUser();
  error: boolean;

  constructor(private loginService: LoginService) { }


  login(){
    this.loginService.login(this.user).subscribe(credential =>
    this.loginService.createSession(credential)
    );
    this.error = this.loginService.errorLogin();
  }

  ngOnInit() {
    this.loginService.loggout();
  }

}
