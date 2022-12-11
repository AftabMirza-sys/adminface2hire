import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {FaqcategoryService} from '../services/faqcategory.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
userid:any;
username:any;
catetype:any;
  constructor(private http: HttpClient,private route:Router, private catedata:FaqcategoryService) { 
    this.userid = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
    this.catedata.faqcategory().subscribe((faqcategory)=>{
      console.warn("faqcategory",faqcategory);
      this.catetype = faqcategory;
      
    });
  }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(faqdata: any) {
    this.http.post(environment.baseUrl+'/faq/addFaq', faqdata).subscribe((result) => {
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
