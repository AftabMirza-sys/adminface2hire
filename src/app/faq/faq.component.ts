import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(faqdata: any) {
    this.http.post('http://localhost:3300/faq/addFaq', faqdata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }

}
