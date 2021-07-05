import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { RecruiterAuthGuard } from './recruiter-auth.guard';
import { AddJobComponent } from './recruiter/add-job/add-job.component';
import { LoginComponent } from './recruiter/login/login.component';
import { RecruiterProfileComponent } from './recruiter/recruiter-profile/recruiter-profile.component';
import { RegisterComponent } from './recruiter/register/register.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user/signup',
    component:SignupComponent
  },
  {
    path:'user/signin',
    component:SigninComponent
  },
  {
    path:'user/profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'recruit/login',
    component:LoginComponent
  },
  {
    path:'recruit/register',
    component:RegisterComponent
  },
  {
    path:'recruit/profile/:id',
    component:RecruiterProfileComponent,
    canActivate:[RecruiterAuthGuard]
  },
  {
    path:'recruit/:id/add-job',
    component:AddJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
