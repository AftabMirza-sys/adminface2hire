import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkilldataService {

  url = environment.baseUrl+"/skill/listSkill";
  constructor(private http:HttpClient) { }
  skilldata()
  {
return this.http.get(this.url);

  }
}
