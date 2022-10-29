import { Component, OnInit } from '@angular/core';
import { AppDataService } from './core/services/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'global-rh';
  loading: boolean = true;
  appData: any;

  constructor(private appService: AppDataService){
  }

  ngOnInit(): void {
    this.appService.getAppData()
    this.appService.appData.subscribe((r:any) => {
      this.appData = r;
      this.loading = false;

    })

  }
}
