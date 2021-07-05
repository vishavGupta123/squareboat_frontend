import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search_text:string = "";
  jobs:any[]=[];
  constructor(private route:ActivatedRoute,private jobService:JobService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam)=>{
      this.search_text = queryParam.search_text;
      console.log(this.search_text);
      this.jobService.getJobBySearchName(this.search_text).subscribe(
        (jobs)=>{
          console.log(jobs);
          this.jobs = jobs;
        },
        (err)=>{
          console.log(err);
        }
      );
    })
  }

}
