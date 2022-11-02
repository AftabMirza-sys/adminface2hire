import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterestdataService {

  url = "http://localhost:3300/interest/listInterest";
  constructor(private http:HttpClient) { }
  interestdata()
  {
return this.http.get(this.url);

  }
}
