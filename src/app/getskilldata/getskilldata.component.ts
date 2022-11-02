import { Component, OnInit } from '@angular/core';
import {SkilldataService} from '../services/skilldata.service';

@Component({
  selector: 'app-getskilldata',
  templateUrl: './getskilldata.component.html',
  styleUrls: ['./getskilldata.component.css']
})
export class GetskilldataComponent implements OnInit {

  skill:any;
  constructor(private roledata:SkilldataService) { 
    this.roledata.skilldata().subscribe((skilldata)=>{
      console.warn("skilldata",skilldata);
      this.skill = skilldata;
      
    });
  }

  ngOnInit(): void {
  }

}
