import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IpodetailsserviceService {
  private baseUrl = 'http://localhost:8099/IpoDetails/IpoDetails/';



 constructor(private http:HttpClient) { }

 getAllIpoDetails(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'getAllIpoDetails');
 
  }
 

 saveIpoDetails(ipodetails: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'saveIpoDetails', ipodetails);

 }
 
  deleteIpoDetails(ipoid: Number): Observable<any> {
 
   return this.http.delete(`${this.baseUrl}/deleteIpoDetails/${ipoid}`);
 
  }
 
 
 
findOneInAll(ipoid: Number): Observable<any> {
 
   return this.http.get(`${this.baseUrl}/findOneInAll2/${ipoid}`);
 
  }
 
 
 
  updateIpoDetails(ipoid: Number, value: any): Observable<any> {
 
   return this.http.put(`${this.baseUrl}/updateIpoDetails/${ipoid}`, value);
 
  }



}

