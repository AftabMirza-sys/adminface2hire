import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntypeService {
  url = "http://localhost:3300/industryType/listIndustryType";
  constructor(private http:HttpClient) { }
  intypedata()
  {
return this.http.get(this.url);

  }
}
