import {EventEmitter, Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'

import { Router } from '@angular/router';

import {ErrorHandler} from '../app.error-handler'
import { User } from '../users/user.model';


export class FinalUser {
  email: string;
  password: string;
  constructor() {};
}



@Injectable()
export class LoginService {

  logged = false;
  showMenu = false;
  userType: string;

  showMenuEmitter = new EventEmitter<boolean>();
  showUserEmitter = new EventEmitter<string>();

  constructor(private http: Http, private router: Router){}

  // restaurants(search?: string): Observable<Restaurant[]> {
  //   return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
  //     .map(response => response.json())
  //     .catch(ErrorHandler.handleError)
  // }

  login(json: any){
    return this.http.post(`${API}/users/auth`, json).map((response: Response) => response.json());
  }

  createSession(credential){
    if((credential.type === "gestor") ||(credential.type === "professor")){
      window.sessionStorage.setItem('user', credential._body);
      this.userType = <string> credential.type;

      this.logged =true;
      this.showMenu= true;
      this.showMenuEmitter.emit(true);
      this.showUserEmitter.emit(this.userType);
      this.router.navigate(['/users']);
    }else{
      this.router.navigate(['/login']);
    }

  }

  errorLogin():boolean{
    return !this.logged;
  }

  loggout(){

    if (!window.sessionStorage.getItem('user') === null) {
      window.sessionStorage.removeItem('user');
      this.logged = false;
      this.showMenu = false;
    }

  }

  isLogged(){
    return this.logged
  }

  getUserStatus():any{
    console.log(this.userType);
    return this.userType;
  }

}
