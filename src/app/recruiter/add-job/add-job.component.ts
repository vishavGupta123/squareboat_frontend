import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  recruiterId:number = 0;
  jobForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    experience:new FormControl('',[Validators.required])
  })
  constructor(private route:ActivatedRoute,private jobService:JobService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.recruiterId = params['id'];
      console.log(this.recruiterId);
    })
  }

  onSubmit(){
    if(this.jobForm.valid){
      this.jobService.addNewJob(this.recruiterId,this.jobForm.value).subscribe(
        (job)=>{
          console.log(job);
          this.router.navigate(['/recruit/profile',this.recruiterId]);
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

}
