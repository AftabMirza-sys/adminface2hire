import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RolesdataService {
url = "http://localhost:3300/roles/listRoles";
  constructor(private http:HttpClient) { }
  roledata()
  {
return this.http.get(this.url);

  }
}
