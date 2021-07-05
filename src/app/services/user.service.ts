import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'https://new-sitename.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  public signup(obj:any):Observable<any>{
    console.log(obj);
     return this.httpClient.post(`${this.BASE_URL}/user/create`,obj);
  }

  public signin(obj:any):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/user/login`,obj);
  }

  public isLoggedIn(){
    return !(localStorage.getItem('user') == null);
  }

  public userInfo(){
    return JSON.parse(localStorage.getItem('user')||'{}');
  }

  public getUserById(id:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/user/${id}`);
  }

  public applyForJob(id:number,jobId:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/user/${id}/applyforjob/${jobId}`);
  }
}
