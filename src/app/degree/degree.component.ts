import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor(private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(degreedata: any) {
    
    this.http.post('http://localhost:3300/degree/addDegree', degreedata).subscribe((result) => {
      
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
