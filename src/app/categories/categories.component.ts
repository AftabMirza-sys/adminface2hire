import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
userid : any;
username:any;
  constructor(private http: HttpClient, private route:Router) { 
   this.userid = localStorage.getItem('token');
   this.username = localStorage.getItem('username');
  }




  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(createcategory: any) {
    this.http.post(environment.baseUrl+'/categories/addCategory',createcategory).subscribe((result) => {
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
