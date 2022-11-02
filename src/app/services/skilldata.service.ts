import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkilldataService {

  url = "http://localhost:3300/skill/listSkill";
  constructor(private http:HttpClient) { }
  skilldata()
  {
return this.http.get(this.url);

  }
}
