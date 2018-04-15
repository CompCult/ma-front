import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  showMenu: boolean;

  constructor(private loginService: LoginService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.loginService.showMenuEmitter.subscribe(show => {
     this.showMenu = show;
     this.cdref.detectChanges();
   });
  }

}
