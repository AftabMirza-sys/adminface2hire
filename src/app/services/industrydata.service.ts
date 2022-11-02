import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndustrydataService {

  url = "http://localhost:3300/industry/listIndustry";
  constructor(private http:HttpClient) { }
  industrydata()
  {
return this.http.get(this.url);

  }
}
