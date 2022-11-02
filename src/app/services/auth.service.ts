import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _loginurl = "http://localhost:3300/user/login";
  
constructor(private http : HttpClient) { }

loginuser(user:any)
  {
return this.http.post<any>(this._loginurl,user);
}


}
