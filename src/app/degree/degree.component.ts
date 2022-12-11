import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {
userid :any;
username:any;
  constructor(private http: HttpClient, private route:Router) {
    this.userid = localStorage.getItem('token');
    this.username =localStorage.getItem('username');
   }
 
  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(degreedata: any) {
    
    this.http.post(environment.baseUrl+'/degree/addDegree', degreedata).subscribe((result) => {
      
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
