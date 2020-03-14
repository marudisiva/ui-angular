import { Component, OnInit } from '@angular/core';
import { StockexchangeserviceService } from 'src/app/stockexchangeservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Stockexch } from 'src/app/stockexch';
@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

 
   constructor(private stockexchangeservice:StockexchangeserviceService) { }
  
   stockexch : Stockexch=new Stockexch();
  
   submitted = false;
 
   ngOnInit() {

    var stockexid=window.localStorage.getItem("edit-stockexid");
  if(stockexid!=null && stockexid!=""){
    this.stockexchangeservice.findOneInAll(parseInt(stockexid))
  
      .subscribe(
  
       data => {
  
        this.stockexch =data;
  
        this.stockexchangesaveform.setValue(this.stockexch);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }}
  
  
   stockexchangesaveform=new FormGroup({
 
    stockexid:new FormControl('',[Validators.required]),
  
    stockexchange:new FormControl('',[Validators.required]),

    brief:new FormControl('',[Validators.required]),

    remarks:new FormControl('',[Validators.required]),

    contactaddress:new FormControl('',[Validators.required ])
   });
  
  
  
   saveStockExchange(saveStockExchange){
    this.stockexch=new Stockexch();
  
    this.stockexch.stockexid=this.Stockexid.value;
    this.stockexch.stockexchange=this.Stockexchange.value
    this.stockexch.brief=this.Brief.value;
    this.stockexch.remarks=this.Remarks.value;
    this.stockexch.contactaddress=this.Contactaddress.value;
  
    this.submitted = true;
  
    this.save();
  }
   
 
   save() {
  
    this.stockexchangeservice.saveStockExchange(this.stockexch)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.stockexch = new Stockexch();
    window.localStorage.removeItem("edit-stockexid");
  
   }
  
   get Stockexid(){
  
    return this.stockexchangesaveform.get('stockexid');
  
   }
  
   get Stockexchange(){
  
    return this.stockexchangesaveform.get('stockexchange');
  
   }
  
   get Brief(){
  
    return this.stockexchangesaveform.get('brief');
  
   }
  
  
   get Remarks(){
  
    return this.stockexchangesaveform.get('remarks');
  
   }

   get Contactaddress(){
  
    return this.stockexchangesaveform.get('contactaddress');
  
   }
  
   saveStockExchangeForm(){
  
    this.submitted=false;
  
    this.stockexchangesaveform.reset();
  
   }
  
  }
  

  
 
