import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajordataService {
  url = "http://localhost:3300/major/listMajor";
  constructor(private http:HttpClient) { }
  majordata()
  {
return this.http.get(this.url);

  }
}
