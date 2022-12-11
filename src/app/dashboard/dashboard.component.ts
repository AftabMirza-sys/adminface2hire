import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username:any;
  constructor(private route:Router) {
    this.username = localStorage.getItem('username');
   }




  ngOnInit(): void {
  }

  onlogout()
{
  localStorage.removeItem('token');
  this.route.navigate(['./']);
}

}
