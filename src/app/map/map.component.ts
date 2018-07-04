import { Component, OnInit } from '@angular/core';

import{Map} from './map.model'
import {MapService} from './map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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

  treeStatus(tree:Map):string{
    if(tree._request === null){
      return "Status: Pendente";
    }else{
      return "Status: " + tree._request.status;
    }
  }

  treeStatusBoolean(tree:Map):boolean{
    if(tree._request == null){
      return false;
    }
    return true;
  }

  treeView(map:Map):boolean{
    // if(map._request == null){
    //   return false;
    // }else{
      return true;
    // }
  }

  markerIconMapUrl(map:Map) {
    if(map._request == null){
      return '../assets/img/pin_red_map.png';
    }
    if(map._request.status == "Plantada"){
      return '../assets/img/pin_green_map.png';
    }else if(map._request.status == "Aprovado"){
      return '../assets/img/pin_blue_map.png';
    }else if(map._request.status == "Pendente"){
      return '../assets/img/pin_yellow_map.png';
    }else{
      return '../assets/img/pin_red_map.png';
    }

  }
}
