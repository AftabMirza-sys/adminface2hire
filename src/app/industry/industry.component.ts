import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IntypeService } from '../services/intype.service';
@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  userid:any;
  username:any;
  intypedatasend:any;

  ngOnInit(): void {
  }


  constructor(private http: HttpClient,private route:Router,private intypedata:IntypeService) {
    this.userid = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
   
  
  
    this.intypedata.intypedata().subscribe((intypedata)=>{
      console.warn("intypedata",intypedata);
      this.intypedatasend = intypedata;
      
    });
  
  
  
  
  
  
  
  }





  message: boolean = false;
  onSubmit(industrydata: any) {
    console.warn('industrydata',industrydata);
    this.http.post(environment.baseUrl+'/industry/addIndustry', industrydata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });

  }
  removemessage() {
    this.message = false;

  }
  onlogout()
  {
    localStorage.removeItem('token');
    this.route.navigate(['./']);
  }

}
