import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  message: boolean = false;
  onSubmit(userdata: any) {
    this.http.post('http://localhost:3300/user/addUser', userdata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }

  removemessage() {
    this.message = false;

  }



}
