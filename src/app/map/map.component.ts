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

  markerIconMapUrl(map:Map) {
    if(map._request == null){
      return '../assets/img/pin_red_map.png';
    }
      if(map._request.status == "Aprovado"){
        console.log("gree");
        return '../assets/img/pin_green_map.png';
      }else if(map._request.status == "Pendente"){
        console.log("yellow");
        return '../assets/img/pin_yellow_map.png';
      }else{
        console.log("red");
        return '../assets/img/pin_red_map.png';
      }

     }
}
