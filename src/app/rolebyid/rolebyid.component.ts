import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolebyid',
  templateUrl: './rolebyid.component.html',
  styleUrls: ['./rolebyid.component.css']
})
export class RolebyidComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  onlogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['./']);
  }


}
