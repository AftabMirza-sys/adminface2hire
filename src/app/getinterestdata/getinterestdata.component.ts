import { Component, OnInit } from '@angular/core';
import {InterestdataService} from '../services/interestdata.service';

@Component({
  selector: 'app-getinterestdata',
  templateUrl: './getinterestdata.component.html',
  styleUrls: ['./getinterestdata.component.css']
})
export class GetinterestdataComponent implements OnInit {

  interest:any;
  constructor(private roledata:InterestdataService) { 
    this.roledata.interestdata().subscribe((interestdata)=>{
      console.warn("interestdata",interestdata);
      this.interest = interestdata;
      
    });
  }

  ngOnInit(): void {
  }

}
