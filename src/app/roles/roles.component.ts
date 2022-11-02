import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
  }
  message: boolean = false;
  onSubmit(rolesdata: any) {
    this.http.post('http://localhost:3300/roles/addRole', rolesdata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }


  

}

