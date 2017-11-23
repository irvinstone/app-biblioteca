import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

   public login (data) {
     this.http.get(environment.api).subscribe(function (datas) {
        console.log(datas);
     });
  }

}
