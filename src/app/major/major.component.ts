import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {
  constructor(private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

 

  message: boolean = false;
  onSubmit(majordata: any) {
    this.http.post('http://localhost:3300/major/addMajor', majordata).subscribe((result) => {
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
