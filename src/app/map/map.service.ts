import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Map } from './map.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class MapService {

  constructor(private http: Http){}

  // restaurants(search?: string): Observable<Restaurant[]> {
  //   return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
  //     .map(response => response.json())
  //     .catch(ErrorHandler.handleError)
  // }


  getMap(): Observable<Map[]>{
    return this.http.get(`${API}/trees`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)

  }

}
