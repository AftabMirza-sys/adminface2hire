import { Component, OnInit } from '@angular/core';
import {IndustrydataService} from '../services/industrydata.service';

@Component({
  selector: 'app-getindustrydata',
  templateUrl: './getindustrydata.component.html',
  styleUrls: ['./getindustrydata.component.css']
})
export class GetindustrydataComponent implements OnInit {

  industry:any;
  constructor(private catedata:IndustrydataService) { 
    this.catedata.industrydata().subscribe((industrydata)=>{
      console.warn("industrydata",industrydata);
      this.industry = industrydata;
      
    });
  }

  ngOnInit(): void {
  }

}
