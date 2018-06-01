import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Local } from './local.model'

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class LocalService {

  constructor(private http: Http){}

  createLocal(json: any) {
    return this.http.post(`${API}/places`, json).map((response: Response) => response.json());
  }

  showLocal( id:string):  Observable<Local>{
    return this.http.get(`${API}/places/${id}`).map((response: Response) => response.json());
  }

  updateLocal(json: any, id:number) {
    return this.http.put(`${API}/places/${id}`, json).map((response: Response) => response.text());
  }

  deleteLocal(json: any, id:number) {
  return this.http.delete(`${API}/places/${id}`, json).map((response: Response) => response.text());
  }

  getLocal(): Observable<Local[]>{
    return this.http.get(`${API}/places`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
