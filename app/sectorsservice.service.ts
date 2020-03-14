import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorsserviceService {

  private baseUrl = 'http://localhost:8099/Sectors/sectors/';

 constructor(private http:HttpClient) { }

 getAllSectors(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'getAllSectors');
 
  }
 

 saveSectors(sectors: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'saveSectors', sectors);

 }
 
  deleteSectors(sectorid: Number): Observable<any> {
 
   return this.http.delete(`${this.baseUrl}/deleteSectors/${sectorid}`);
 
  }
 
 
 
  findOneInAll(sectorid: Number): Observable<any> {
 
   return this.http.get(`${this.baseUrl}/findOneInAll3/${sectorid}`);
 
  }
 
 
 
  updateSectors(sectorid: Number, value: any): Observable<any> {
 
   return this.http.put(`${this.baseUrl}/updateSectors/${sectorid}`, value);
 
  }



}

