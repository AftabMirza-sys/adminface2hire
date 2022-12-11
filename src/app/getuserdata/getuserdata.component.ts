import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{UsersdataService} from '../services/usersdata.service';

@Component({
  selector: 'app-getuserdata',
  templateUrl: './getuserdata.component.html',
  styleUrls: ['./getuserdata.component.css']
})
export class GetuserdataComponent implements OnInit {
  user:any;
  createdby :any;
  constructor(private usersdata:UsersdataService) { 
    this.usersdata.userdata().subscribe((userdata)=>{
      console.warn("userdata",userdata);
      this.user = userdata;
      this.createdby = localStorage.getItem('token');
      
    });
  }
      
   
  
  ngOnInit(): void {
  }

}
