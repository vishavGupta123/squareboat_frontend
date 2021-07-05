import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    contact_person:new FormControl('',[Validators.required]),
    company_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private recruiterService:RecruiterService,private router:Router) { }

  ngOnInit(): void {
    if(this.recruiterService.isRecruiterLoggedIn()){
      let recruiterObj = this.recruiterService.getRecruiterInfo();
      this.router.navigate(['/recruit/profile/',recruiterObj.id]);
    }
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.recruiterService.registerRecruiter(this.registerForm.value).subscribe(
        (recruiter)=>{
          console.log(recruiter);
          this.router.navigate(['/recruit/login']);
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

}
