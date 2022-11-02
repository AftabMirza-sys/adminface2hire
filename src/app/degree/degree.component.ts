import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

}
