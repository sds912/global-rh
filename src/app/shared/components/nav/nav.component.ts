import { AppDataService } from './../../../core/services/app-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() menus!:any;

  constructor() {

   }

  ngOnInit(): void {

  }

}
