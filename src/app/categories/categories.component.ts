import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(createcategory: any) {
    this.http.post('http://localhost:3300/categories/addCategory',createcategory).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }







}
