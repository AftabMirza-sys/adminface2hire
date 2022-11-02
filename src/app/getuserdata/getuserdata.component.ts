import { Component, OnInit } from '@angular/core';
import{UsersdataService} from '../services/usersdata.service';

@Component({
  selector: 'app-getuserdata',
  templateUrl: './getuserdata.component.html',
  styleUrls: ['./getuserdata.component.css']
})
export class GetuserdataComponent implements OnInit {
  user:any;
  constructor(private userdata:UsersdataService) { 
   
      
      
   
  }
  ngOnInit(): void {
  }

}
