import { AppDataService } from './../../core/services/app-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private appServie: AppDataService) { }

  ngOnInit(): void {
    this.appServie.appData.subscribe(r => console.log(r))
  }

}
