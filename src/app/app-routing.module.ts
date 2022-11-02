import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DegreeComponent } from './degree/degree.component';
import { FaqComponent } from './faq/faq.component';
import { IndustryComponent } from './industry/industry.component';
import { IntrestComponent } from './intrest/intrest.component';
import { LoginComponent } from './login/login.component';
import { MajorComponent } from './major/major.component';
import { RolesComponent } from './roles/roles.component';
import { SkillComponent } from './skill/skill.component';
import { UsersComponent } from './users/users.component';
import { FaqcategoryComponent } from  './faqcategory/faqcategory.component';
import { IndustrytypeComponent } from './industrytype/industrytype.component';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'roles',component:RolesComponent},
{path:'user',component:UsersComponent},
{path:'categories',component:CategoriesComponent},
{path:'degree',component:DegreeComponent},
{path:'faq',component:FaqComponent},
{path:'industry',component:IndustryComponent},
{path:'intrest',component:IntrestComponent},
{path:'major',component:MajorComponent},
{path:'skill',component:SkillComponent},
{path:'',component:LoginComponent},
{path:'faqcategory',component:FaqcategoryComponent},
{path:'industrytype',component:IndustrytypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
