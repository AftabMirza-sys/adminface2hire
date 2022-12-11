import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqcategoryService {

  url = environment.baseUrl+"/faqCategory/listFaqCategory";
  constructor(private http:HttpClient) { }
  faqcategory()
  {
return this.http.get(this.url);

  }
}
