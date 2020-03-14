import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({

 providedIn: 'root'

})

export class UserserviceService {

 private baseUrl = 'http://localhost:8099/User/UserPortal';



 constructor(private http:HttpClient) { }

 getAllusers(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllUsers');
 
  }
 

 saveUser(user: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveUser', user);

 }
 
  deleteUser(username: String): Observable<any> {
 
   return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
 
  }
 
 
 
  findOneInAll(username: String): Observable<any> {
 
   return this.http.get(`${this.baseUrl}/findOneInAll/${username}`);
 
  }
 
 
 
  updateUser(username: String, value: any): Observable<any> {
 
   return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);
 
  }

  findByUsernameAndPassword(username: String,password: String): Observable<any> {

    return this.http.get(this.baseUrl+'/findByUsernameAndPassword/'+username+'/'+password);
  
   }

}





