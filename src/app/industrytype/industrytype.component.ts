import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-industrytype',
  templateUrl: './industrytype.component.html',
  styleUrls: ['./industrytype.component.css']
})
export class IndustrytypeComponent implements OnInit {


  ngOnInit(): void {
  }


  constructor(private http: HttpClient) { }

  message: boolean = false;
  onSubmit(intype: any) {
    this.http.post('http://localhost:3300/industryType/addIndustryType', intype).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }

}
