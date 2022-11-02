import { Component, OnInit } from '@angular/core';
import{ FaqdataService} from '../services/faqdata.service';

@Component({
  selector: 'app-getfaqdata',
  templateUrl: './getfaqdata.component.html',
  styleUrls: ['./getfaqdata.component.css']
})
export class GetfaqdataComponent implements OnInit {

  faq:any;
  constructor(private catedata:FaqdataService) { 
    this.catedata.faqdata().subscribe((faqdata)=>{
      console.warn("faq",faqdata);
      this.faq = faqdata;
      
    });
  }
  ngOnInit(): void {
  }

}
