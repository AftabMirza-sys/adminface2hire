import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private http: HttpClient,private route:Router) { }

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




  onlogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['./']);
  }

}
