import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  BASE_URL = 'https://new-sitename.herokuapp.com'

  constructor(private httpClient:HttpClient) { }

  public registerRecruiter(obj:any):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/recruiter/create`,obj);
  }

  public signinRecruiter(obj:any):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/recruiter/login`,obj);
  }

  public findById(id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/recruiter/${id}`);
  }

  public isRecruiterLoggedIn():boolean{
    console.log(localStorage.getItem('recruiterObj'));
    return !(localStorage.getItem('recruiterObj') == null);
  }

  public getRecruiterInfo(){
    return JSON.parse(localStorage.getItem('recruiterObj')|| '{}');
  }

}
