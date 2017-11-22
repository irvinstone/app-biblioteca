import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

   public login (data) {
     this.http.get('https://dog.ceo/api/breeds/list').subscribe(function (datas) {
        console.log(datas);
     });
  }

}
