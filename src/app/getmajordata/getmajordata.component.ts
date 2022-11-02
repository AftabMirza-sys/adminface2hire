import { Component, OnInit } from '@angular/core';
import {MajordataService} from '../services/majordata.service';

@Component({
  selector: 'app-getmajordata',
  templateUrl: './getmajordata.component.html',
  styleUrls: ['./getmajordata.component.css']
})
export class GetmajordataComponent implements OnInit {

  major:any;
  constructor(private roledata:MajordataService) { 
    this.roledata.majordata().subscribe((majordata)=>{
      console.warn("majordata",majordata);
      this.major = majordata;
      
    });
  }

  ngOnInit(): void {
  }

}
