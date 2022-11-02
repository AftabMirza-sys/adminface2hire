import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {

  url = "http://localhost:3300/categories/listCategory";
  constructor(private http:HttpClient) { }
  catdata()
  {
return this.http.get(this.url);

  }
}
