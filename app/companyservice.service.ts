import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

 
  private baseUrl = 'http://localhost:8099/Company/Companies/';



 constructor(private http:HttpClient) { }

 getAllcompanies(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'getAllCompanies');
 
  }
 

 saveCompany(company: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'saveCompany', company);

 }
 
  deleteCompany(companyname: String): Observable<any> {
 
   return this.http.delete(`${this.baseUrl}/deleteCompany/${companyname}`);
 
  }
 
 
 
findOneInAll(companyname: String): Observable<any> {
 
   return this.http.get(`${this.baseUrl}/findOneInAll1/${companyname}`);
 
  }
 
 
 
  updateCompany(companyname: String, value: any): Observable<Object> {
 
   return this.http.put(`${this.baseUrl}/updateCompany/${companyname}`, value);
 
  }



}

