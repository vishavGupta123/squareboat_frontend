import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs:any[]=[];
  appliedJobs:any[]=[];
  constructor(private jobService:JobService,private userService:UserService,private router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.jobService.getAllJobs().subscribe(
    (jobs)=>{
      console.log(jobs);
      this.jobs = jobs;
    },
    (err)=>{
      console.log(err);
    }
    )
    if(this.userService.isLoggedIn()){
      let userObj = this.userService.userInfo();
      this.userService.getUserById(userObj.id).subscribe(
        (user)=>{
          console.log(user.jobs);
          this.appliedJobs = user.jobs;
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
  applyForJob(id:number){
    console.log(id);
    if(this.userService.isLoggedIn()){
      let candidateObj = this.userService.userInfo();
      this.userService.applyForJob(candidateObj.id,id).subscribe(
        (data)=>{
          console.log(data);
          window.location.reload();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
    else{
      this.router.navigate(['/user/signin']);
    }
  }

  hasAppliedToJob(id:number){
    let index;
    index = this.appliedJobs.findIndex((appliedJob)=>appliedJob.id === id);
    if(index==-1){
      return false;
    }
    return true;
  }

}
