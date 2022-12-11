import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { DegreeComponent } from './degree/degree.component';
import { IntrestComponent } from './intrest/intrest.component';
import { MajorComponent } from './major/major.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RolesComponent } from './roles/roles.component';
import { GetrolesdataComponent } from './getrolesdata/getrolesdata.component';
import { GetuserdataComponent } from './getuserdata/getuserdata.component';
import { GetcategorydataComponent } from './getcategorydata/getcategorydata.component';
import { GetdegreedataComponent } from './getdegreedata/getdegreedata.component';
import { GetinterestdataComponent } from './getinterestdata/getinterestdata.component';
import { GetmajordataComponent } from './getmajordata/getmajordata.component';
import { GetskilldataComponent } from './getskilldata/getskilldata.component';
import { GetindustrydataComponent } from './getindustrydata/getindustrydata.component';
import { GetfaqdataComponent } from './getfaqdata/getfaqdata.component';
import { FaqcategoryComponent } from './faqcategory/faqcategory.component';
import { IndustrytypeComponent } from './industrytype/industrytype.component';
import { GetfaqcategoryComponent } from './getfaqcategory/getfaqcategory.component';
import { GetintypeComponent } from './getintype/getintype.component';
import { AuthGuard } from './auth.guard';
import { RolebyidComponent } from './rolebyid/rolebyid.component';




@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    DashboardComponent,
    UsersComponent,
    CategoriesComponent,
    DegreeComponent,
    IntrestComponent,
    MajorComponent,
    SkillComponent,
    IndustryComponent,
    FaqComponent,
    LoginComponent,
    GetrolesdataComponent,
    GetuserdataComponent,
    GetcategorydataComponent,
    GetdegreedataComponent,
    GetinterestdataComponent,
    GetmajordataComponent,
    GetskilldataComponent,
    GetindustrydataComponent,
    GetfaqdataComponent,
    FaqcategoryComponent,
    IndustrytypeComponent,
    GetfaqcategoryComponent,
    GetintypeComponent,
    RolebyidComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  
    
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
