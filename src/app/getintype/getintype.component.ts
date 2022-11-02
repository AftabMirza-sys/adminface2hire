import { Component, OnInit } from '@angular/core';
import{IntypeService} from '../services/intype.service';

@Component({
  selector: 'app-getintype',
  templateUrl: './getintype.component.html',
  styleUrls: ['./getintype.component.css']
})
export class GetintypeComponent implements OnInit {

  intype:any;
  constructor(private roledata:IntypeService) { 
    this.roledata.intypedata().subscribe((intypedata)=>{
      console.warn("interestdata",intypedata);
      this.intype = intypedata;
      
    });
  }

  ngOnInit(): void {
  }

}
