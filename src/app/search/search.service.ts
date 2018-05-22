import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class SearchService {

  constructor(private http: Http){}


  search(field: string, param: string): Observable<any[]>{
    return this.http.get(`${API}/users/query/fields?${field}=${param}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
