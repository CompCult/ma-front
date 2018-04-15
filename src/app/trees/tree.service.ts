import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Tree } from './tree.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class TreeService {

  constructor(private http: Http){}

  createTree(json: any) {
    return this.http.post(`${API}/tree_types`, json).map((response: Response) => response.json());
  }

  updateTree(json: any, id:number) {
    return this.http.put(`${API}/tree_types/${id}`, json).map((response: Response) => response.text());
  }

  deleteTree(json: any, id:number) {
    return this.http.delete(`${API}/tree_types/${id}`, json).map((response: Response) => response.text());
  }

  getObjetos(): Observable<Tree[]>{
    return this.http.get(`${API}/tree_types`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)

  }

}
