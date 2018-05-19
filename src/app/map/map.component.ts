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

  markerIconMapUrl() {
      if(this.status == true){
        return '../assets/img/pin_green_map.png';
      }else if(this.status == false){
        return '../assets/img/pin_red_map.png';
      }else{
        return '../assets/img/pin_yellow_map.png';
      }

     }
}
