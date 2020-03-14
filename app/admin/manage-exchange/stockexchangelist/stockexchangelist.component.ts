import { Component, OnInit } from '@angular/core';
import { Stockexch } from 'src/app/stockexch';
import { Observable } from 'rxjs/internal/Observable';

import { StockexchangeserviceService } from 'src/app/stockexchangeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stockexchangelist',
  templateUrl: './stockexchangelist.component.html',
  styleUrls: ['./stockexchangelist.component.css']
})
export class StockexchangelistComponent implements OnInit {
  isupdated: boolean;
  
  constructor(private router:Router,private stockexchangeserviceservice: StockexchangeserviceService) { }
  stockexchangeList: Observable<Stockexch[]>;
  ngOnInit() {
   this.stockexchangeserviceservice.getAllStockExchange().subscribe(data => {
    this.stockexchangeList = data;
   })
 }
 deleteStockExchange(stockexch : Stockexch ) {

  this.stockexchangeserviceservice.deleteStockExchange(stockexch.stockexid)

   .subscribe(

    data => {

     this.stockexchangeserviceservice.getAllStockExchange().subscribe(data =>{

      this.stockexchangeList =data;

      });



    }) ;

 };

 updateStockExchange(stockexch : Stockexch ) {

 window.localStorage.removeItem("edit-stockexid");

 window.localStorage.setItem("edit-stockexid", stockexch.stockexid.toString());

 this.router.navigate(['manage-exchange']);

 };
}
