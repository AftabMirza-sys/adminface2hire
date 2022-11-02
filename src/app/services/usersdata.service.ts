import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url = "http://localhost:3300/user/listUsers";
  constructor(private http:HttpClient) { }
  userdata()
  {
return this.http.get(this.url);

  }
}
