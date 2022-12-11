import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MajordataService {
  url = environment.baseUrl+"/major/listMajor";
  constructor(private http:HttpClient) { }
  majordata()
  {
return this.http.get(this.url);

  }
}
