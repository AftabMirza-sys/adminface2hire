import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginuserdata:any = {};

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  loginuser()
  {
    console.log('loginuserdata',this.loginuserdata);
    this.auth.loginuser(this.loginuserdata)
    .subscribe(
      res => console.log(res),
      err => console.log(err) 
    )
  }


}
