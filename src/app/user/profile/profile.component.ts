import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.userInfo();
    console.log(this.user);
    this.userService.getUserById(this.user.id).subscribe(
      (user)=>{
        console.log(user);
        this.user = user;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
