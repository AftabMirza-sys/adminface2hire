import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faqcategory',
  templateUrl: './faqcategory.component.html',
  styleUrls: ['./faqcategory.component.css']
})
export class FaqcategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(faqcate: any) {
    this.http.post('http://localhost:3300/faqCategory/addFaqCategory', faqcate).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }


}
