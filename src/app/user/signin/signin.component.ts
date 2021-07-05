import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/user/profile']);
    }
  }

  onSubmit(){
    if(this.signinform.valid){
      this.userService.signin(this.signinform.value).subscribe(
        (user)=>{
          console.log(user);
          localStorage.setItem('user',JSON.stringify({name:user.name,id:user.id}));
          window.location.reload();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

}
