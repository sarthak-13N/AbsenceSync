import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from '../../../leave-application/src/app/error/error.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavecalenderComponent } from './leavecalender/leavecalender.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'request',component:LeaverequestComponent},
  {path:'history',component:LeavehistoryComponent},
  {path:'calender',component:LeavecalenderComponent},
  {path:'company',component:CompanyComponent},


  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
