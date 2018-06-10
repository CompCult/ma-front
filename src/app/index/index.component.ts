import { Component, OnInit } from '@angular/core';

import{Map} from '../map/map.model';
import {MapService} from '../map/map.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  y = -7.216521;
  x = -35.909413;
  status:Boolean = true;

  trees: Map[]=[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getMap()
    .subscribe(trees => this.trees = trees);
  }

  toNumber(string) {
    return parseFloat(string);
  }

  treeType(tree:Map):string{
    if(tree._type === null){
      return "Tipo: Sem tipo";
    }else{
      return "Tipo: " + tree._type;
    }
  }

  treeStatusBoolean(tree:Map):boolean{
    if(tree._request == null){
      return false;
    }
    return true;
  }

  treeView(map:Map):boolean{
    if(map._request == null){
      return false;
    }
    if(map._request.status == "Aprovado" || map._request.status == "Plantada"){
      return true;
    }else{
      return false;
    }
  }

  markerIconMapUrl(map:Map) {
    if(map._request == null){
      return '../assets/img/pin_red_map.png';
    }
      if(map._request.status == "Aprovado" || map._request.status == "Plantada"){
        return '../assets/img/pin_green_map.png';
      }else if(map._request.status == "Pendente"){
        return '../assets/img/pin_yellow_map.png';
      }else{
        return '../assets/img/pin_red_map.png';
      }

     }

}
