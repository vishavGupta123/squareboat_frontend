import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { SignupComponent } from './user/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './user/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './recruiter/login/login.component';
import { RegisterComponent } from './recruiter/register/register.component';
import { RecruiterProfileComponent } from './recruiter/recruiter-profile/recruiter-profile.component';
import { AddJobComponent } from './recruiter/add-job/add-job.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    RecruiterProfileComponent,
    AddJobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
