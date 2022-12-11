import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faqcategory',
  templateUrl: './faqcategory.component.html',
  styleUrls: ['./faqcategory.component.css']
})
export class FaqcategoryComponent implements OnInit {
userid:any;
username:any;
  constructor(private http: HttpClient, private route:Router) { 
    this.userid = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(faqcate: any) {
    this.http.post(environment.baseUrl+'/faqCategory/addFaqCategory', faqcate).subscribe((result) => {
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
