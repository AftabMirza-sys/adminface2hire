import { Component, OnInit } from '@angular/core';
import {FaqcategoryService} from '../services/faqcategory.service';
@Component({
  selector: 'app-getfaqcategory',
  templateUrl: './getfaqcategory.component.html',
  styleUrls: ['./getfaqcategory.component.css']
})
export class GetfaqcategoryComponent implements OnInit {

  faqcate:any;
  constructor(private catedata:FaqcategoryService) { 
    this.catedata.faqcategory().subscribe((faqcategory)=>{
      console.warn("faqcategory",faqcategory);
      this.faqcate = faqcategory;
      
    });
  }

  ngOnInit(): void {
  }

}
