import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit {

  
userid:any;
username:any;
  ngOnInit(): void {

  }


  constructor(private http: HttpClient, private route:Router) {
    this.userid = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
   }

  message: boolean = false;
  onSubmit(interestdata: any) {
    this.http.post(environment.baseUrl+'/interest/addInterest', interestdata).subscribe((result) => {
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
