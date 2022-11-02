import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqcategoryService {

  url = "http://localhost:3300/faqCategory/listFaqCategory";
  constructor(private http:HttpClient) { }
  faqcategory()
  {
return this.http.get(this.url);

  }
}
