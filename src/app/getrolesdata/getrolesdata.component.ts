import { Component, OnInit } from '@angular/core';
import {RolesdataService} from '../services/rolesdata.service';

@Component({
  selector: 'app-getrolesdata',
  templateUrl: './getrolesdata.component.html',
  styleUrls: ['./getrolesdata.component.css']
})
export class GetrolesdataComponent implements OnInit {
  role:any;
  constructor(private roledata:RolesdataService) { 
    this.roledata.roledata().subscribe((rolesdata)=>{
      console.warn("rolesdata",rolesdata);
      this.role = rolesdata;
      
    });
  }

  ngOnInit(): void {
  }


}
