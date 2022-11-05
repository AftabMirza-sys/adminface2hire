import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  message: boolean = false;
  onSubmit(skilldata: any) {
    this.http.post('http://localhost:3300/skill/addSkill', skilldata).subscribe((result) => {
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
