import { Component, OnInit } from '@angular/core';

import { LoginService, FinalUser } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FinalUser = new FinalUser();

  constructor(private loginService: LoginService) { }


  login(){
    this.loginService.login(this.user).subscribe(credential =>
      this.loginService.createSession(credential)
    )
  }

  ngOnInit() {
    this.loginService.loggout();
  }

}
