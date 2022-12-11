import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndustrydataService {

  url = environment.baseUrl+"/industry/listIndustry";
  constructor(private http:HttpClient) { }
  industrydata()
  {
return this.http.get(this.url);

  }
}
