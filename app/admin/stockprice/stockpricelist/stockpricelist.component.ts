import { Component, OnInit } from '@angular/core';
import { StockpriceserviceService } from 'src/app/stockpriceservice.service';

import { Stockprice } from 'src/app/stockprice';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {


 constructor(private router:Router,private stockpriceservice: StockpriceserviceService) { }



 stockpriceList: Observable<Stockprice[]>;



 ngOnInit() {



  this.stockpriceservice.getAllStockPrice().subscribe(data => {



  this.stockpriceList = data;



  })



 }
 deleteStockPrice(stockprice : Stockprice ) {

  this.stockpriceservice.deleteStockPrice(stockprice.stockexchange)

   .subscribe(

    data => {

     this.stockpriceservice.getAllStockPrice().subscribe(data =>{

      this.stockpriceList =data;

      });



    }) ;

 };

 updateStockPrice(stockprice : Stockprice ) {

 window.localStorage.removeItem("edit-stockexchange");

 window.localStorage.setItem("edit-stockexchange", stockprice.stockexchange.toString());

 this.router.navigate(['stockprice']);

 };
}

