import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit {

  

  ngOnInit(): void {

  }


  constructor(private http: HttpClient) { }

  message: boolean = false;
  onSubmit(interestdata: any) {
    this.http.post('http://localhost:3300/interest/addInterest', interestdata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }


}
