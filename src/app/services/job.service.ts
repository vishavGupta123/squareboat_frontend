import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

   BASE_URL:string = 'https://new-sitename.herokuapp.com'

  constructor(private httpClient:HttpClient) { }

  public getAllJobs():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/job/all`);
  }

  public getJobBySearchName(text:string):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/job/title/?job_title=${text}`);
  }

  public addNewJob(recruiterId:number,obj:any):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/job/create/${recruiterId}`,obj);
  }

  public getJobById(id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/job/${id}`);
  }

}
