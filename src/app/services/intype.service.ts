import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntypeService {
  url = environment.baseUrl+"/industryType/listIndustryType";
  constructor(private http:HttpClient) { }
  intypedata()
  {
return this.http.get(this.url);

  }
}
