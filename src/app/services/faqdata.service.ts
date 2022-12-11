import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqdataService {

  url = environment.baseUrl+"/faq/listFaq";
  constructor(private http:HttpClient) { }
  faqdata()
  {
return this.http.get(this.url);

  }
}
