import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.scss']
})
export class RecruiterProfileComponent implements OnInit {

  recruiterId:number=0;
  recruiter:any;
  candidates:any[]=[];
  selectedJobId:number=0;
  constructor(private route:ActivatedRoute,private recruiterService:RecruiterService,
    private router:Router,private jobService:JobService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.recruiterId = params['id'];
      this.recruiterService.findById(this.recruiterId).subscribe(
        (recruiter)=>{
          console.log(recruiter);
          this.recruiter = recruiter;
        },
        (err)=>{
          console.log(err);
        }
      )
    })
  }
  addNewJob(){
    this.router.navigate(['/recruit',this.recruiterId,'add-job']);
  }

  fetchCandidatesForJob(id:number){
    this.selectedJobId = id;
      this.jobService.getJobById(id).subscribe(
        (job)=>{
          console.log(job);
          this.candidates = job.candidates;
        },
        (err)=>{
          console.log(err);
        }
      )
  }

}
