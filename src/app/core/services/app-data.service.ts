import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  appData: Subject<any> = new  Subject<any>();
  loading: Subject<boolean> = new  Subject<boolean>()

  constructor(private http: HttpClient) {

   }



  getAppData() {
    this.appData.next("ok")
     this.http.get('assets/json/app-data.json').subscribe((res:any) =>{
      this.appData.next(res);
      this.loading.next(false);
    })
  }
}
