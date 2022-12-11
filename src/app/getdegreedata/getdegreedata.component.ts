import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DegreedataService} from "../services/degreedata.service";

@Component({
  selector: 'app-getdegreedata',
  templateUrl: './getdegreedata.component.html',
  styleUrls: ['./getdegreedata.component.css']
})
export class GetdegreedataComponent implements OnInit {

  
 

  degree:any;
  constructor(private catedata:DegreedataService) { 
    this.catedata.degreedata().subscribe((degreedata)=>{
      console.warn("degreedata",degreedata);
      this.degree = degreedata;
      
    });
  }



  ngOnInit(): void {
  }





}
