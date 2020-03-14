import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockexchangeserviceService {


  private baseUrl = 'http://localhost:8099/StockExchange/StockExchange';



 constructor(private http:HttpClient) { }

 getAllStockExchange(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllStockExchange');
 
  }
 

 saveStockExchange(stockexchange: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveStockExchange', stockexchange);

 }
 
  deleteStockExchange(stockexid: Number): Observable<any> {
 
   return this.http.delete(`${this.baseUrl}/deleteStockExchange/${stockexid}`);
 
  }
 
 
 
  findOneInAll(stockexid: Number): Observable<any> {
 
   return this.http.get(`${this.baseUrl}/findOneInAll4/${stockexid}`);
 
  }
 
 
 
  updateStockExchange(stockexid: Number, value: any): Observable<any> {
 
   return this.http.put(`${this.baseUrl}/updateStockExchange/${stockexid}`, value);
 
  }



}

