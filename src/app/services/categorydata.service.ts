import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {

  url = environment.baseUrl+"/categories/listCategory";
  constructor(private http:HttpClient) { }
  catdata()
  {
return this.http.get(this.url);

  }
}
