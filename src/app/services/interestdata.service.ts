import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestdataService {

  url = environment.baseUrl+"/interest/listInterest";
  constructor(private http:HttpClient) { }
  interestdata()
  {
return this.http.get(this.url);

  }
}
