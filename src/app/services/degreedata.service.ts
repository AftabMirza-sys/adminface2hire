import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DegreedataService {

  url = "http://localhost:3300/degree/listDegree";
  constructor(private http:HttpClient) { }
  degreedata()
  {
return this.http.get(this.url);

  }
}
