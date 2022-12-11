import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status:any;
message:any;
token:any;
username:any;
  constructor(
   private authService : AuthService, private route : Router
  ) { }

  ngOnInit(): void {
  }

onsubmit( logindata:any)
{
this.authService.login(logindata).subscribe(res=>{console.log(res);
this.status = res.status;

if(this.status == true){
  this.token = res.data.id;
  this.username = res.data.firstName;
  localStorage.setItem('token',this.token);
  localStorage.setItem('username',this.username);
this.route.navigate(['./dashboard']);
}
else
{
  this.route.navigate(['./']);
  this.message = res.message;
}




});
  

}









}
