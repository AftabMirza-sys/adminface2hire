import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqdataService {

  url = "http://localhost:3300/faq/listFaq";
  constructor(private http:HttpClient) { }
  faqdata()
  {
return this.http.get(this.url);

  }
}
