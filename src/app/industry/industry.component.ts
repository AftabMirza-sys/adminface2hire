import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  

  ngOnInit(): void {
  }


  constructor(private http: HttpClient) { }

  message: boolean = false;
  onSubmit(industrydata: any) {
    this.http.post('http://localhost:3300/industry/addIndustry', industrydata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }


}
