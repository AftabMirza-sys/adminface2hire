import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RolesdataService } from '../services/rolesdata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
tokendata:any;
role:any;
  constructor(private http: HttpClient, private route:Router,private roledata:RolesdataService) {

  
    this.roledata.roledata().subscribe((rolesdata)=>{
      console.warn("rolesdata",rolesdata);
      this.role = rolesdata;
      
    });
  }

  ngOnInit(): void {
  }


  message: boolean = false;
  onSubmit(userdata: any) {
    this.http.post(environment.baseUrl+'/user/addUser', userdata).subscribe((result) => {
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
