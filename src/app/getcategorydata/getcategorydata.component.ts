import { Component, OnInit } from '@angular/core';
import  {CategorydataService} from '../services/categorydata.service';

@Component({
  selector: 'app-getcategorydata',
  templateUrl: './getcategorydata.component.html',
  styleUrls: ['./getcategorydata.component.css']
})
export class GetcategorydataComponent implements OnInit {

  category:any;
  constructor(private catedata:CategorydataService) { 
    this.catedata.catdata().subscribe((catdata)=>{
      console.warn("catdata",catdata);
      this.category = catdata;
      
    });
  }

  ngOnInit(): void {
  }




}
