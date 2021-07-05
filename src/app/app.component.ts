import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JobService } from './services/job.service';
import { RecruiterService } from './services/recruiter.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'squareboat-job-portal';
  jobs:any[]=[];
  isLoggedIn:boolean = false;
  userInfo:any;
  search_text :string = "";
  currentUrl:string ="";
  inRecruitSection:boolean = false;
  recruiterObj:any = {};
  isRecruiterLoggedIn:boolean = false;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,
    private recruiterService:RecruiterService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.userService.isLoggedIn()==true){
      this.isLoggedIn = true;
      this.userInfo = this.userService.userInfo();
      console.log(this.userInfo);
    }
    else{
      this.isLoggedIn = false;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        if(this.currentUrl.includes("/recruit")){
          this.inRecruitSection = true;
        }
        else{
          this.inRecruitSection = false;
        }
        console.log(this.currentUrl);
      }
    } );
    if(this.recruiterService.isRecruiterLoggedIn()){
      this.recruiterObj = this.recruiterService.getRecruiterInfo();
      this.isRecruiterLoggedIn = true;
    }
  }

  logout(){
    console.log("hey");
    localStorage.removeItem('user');
    window.location.reload();
  }

  onSubmit(){
    if(this.search_text.length == 0){
      return;
    }
    this.router.navigate(['/search'],{queryParams:{search_text:this.search_text}});
  }


  logOutRecruiter(){
    localStorage.removeItem('recruiterObj');
    window.location.reload();
  }

}
