import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

  constructor(private recruiterService:RecruiterService,private router:Router) { }

  ngOnInit(): void {
    if(this.recruiterService.isRecruiterLoggedIn()){
      console.log(localStorage.getItem('recruiterObj'));
      let recruiterObj:any={};
      recruiterObj = this.recruiterService.getRecruiterInfo();
      console.log(recruiterObj);
      this.router.navigate(['/recruit/profile',recruiterObj.id]);
    }
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.recruiterService.signinRecruiter(this.loginForm.value).subscribe(
        (data)=>{
          console.log(data);
          localStorage.setItem('recruiterObj',JSON.stringify({company_name:data.company_name,id:data.id}));
          window.location.reload();
        },
        (err)=>{
          console.log(err);
        }
      );
    }
  }

}
