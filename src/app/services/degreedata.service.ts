import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DegreedataService {

  url = environment.baseUrl+"/degree/listDegree";
  constructor(private http:HttpClient) { }
  degreedata()
  {
return this.http.get(this.url);

  }
}
