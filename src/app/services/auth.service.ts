import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _loginurl = environment.baseUrl+"/user/login";
  
constructor(private http : HttpClient) { }



login(user:any)
  {
    console.log(user);
return this.http.post<any>(this._loginurl,user);
}


}
