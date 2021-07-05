import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required]),
    college:new FormControl('',[Validators.required])
  })
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/user/profile']);
    }
  }


  onSubmit(){
    if(this.signupform.valid){
      this.userService.signup(this.signupform.value).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigate(['/user/signin']);
          this.signupform.reset();
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }

}
