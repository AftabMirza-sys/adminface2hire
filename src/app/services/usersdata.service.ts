import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url = environment.baseUrl+"/user/listUser";
  constructor(private http:HttpClient) { }
  userdata()
  {
return this.http.get(this.url);

  }
}
