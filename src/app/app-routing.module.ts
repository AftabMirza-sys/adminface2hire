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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent,
canActivate:[AuthGuard]},
{path:'roles',component:RolesComponent,
canActivate:[AuthGuard]},
{path:'user',component:UsersComponent,
canActivate:[AuthGuard]},
{path:'categories',component:CategoriesComponent,
canActivate:[AuthGuard]},
{path:'degree',component:DegreeComponent,
canActivate:[AuthGuard]},
{path:'faq',component:FaqComponent,
canActivate:[AuthGuard]},
{path:'industry',component:IndustryComponent,
canActivate:[AuthGuard]},
{path:'intrest',component:IntrestComponent,
canActivate:[AuthGuard]},
{path:'major',component:MajorComponent,
canActivate:[AuthGuard]},
{path:'skill',component:SkillComponent,
canActivate:[AuthGuard]},
{path:'',component:LoginComponent},
{path:'faqcategory',component:FaqcategoryComponent,
canActivate:[AuthGuard]},
{path:'industrytype',component:IndustrytypeComponent,
canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
