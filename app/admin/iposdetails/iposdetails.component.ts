import { Component, OnInit } from '@angular/core';
import { IpodetailsserviceService } from 'src/app/ipodetailsservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Ipodetails } from 'src/app/ipodetails';
@Component({
  selector: 'app-iposdetails',
  templateUrl: './iposdetails.component.html',
  styleUrls: ['./iposdetails.component.css']
})
export class IposDetailsComponent implements OnInit {

 
 
   constructor(private ipodetailsservice:IpodetailsserviceService) { }
  
   ipodetails : Ipodetails=new Ipodetails();
  
   submitted = false;
 
   ngOnInit() {

    var ipoid=window.localStorage.getItem("edit-ipoid");
    if(ipoid!=null && ipoid!=""){
    this.ipodetailsservice.findOneInAll(parseInt(ipoid))
  
      .subscribe(
  
       data => {
  
        this.ipodetails =data;
  
        this.ipodetailssaveform.setValue(this.ipodetails);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }}
   ipodetailssaveform=new FormGroup({
  
    ipoid:new FormControl('' , [Validators.required  ] ),

    companyname:new FormControl('' , [Validators.required  ] ),
  
    stockexchange:new FormControl('',[Validators.required]),

    pricepershare:new FormControl('',[Validators.required]),

    totalnoofshares:new FormControl('',[Validators.required]),

    opendatetime:new FormControl('',[Validators.required ])
   });
  
  
  
   saveIpoDetails(saveIpoDetails){
 
    this.ipodetails=new Ipodetails();
    this.ipodetails.ipoid=this.Ipoid.value;
    this.ipodetails.companyname=this.Companyname.value;
    this.ipodetails.stockexchange=this.Stockexchange.value;
    this.ipodetails.pricepershare=this.Pricepershare.value;
    this.ipodetails.totalnoofshares=this.Totalnoofshares.value;
    this.ipodetails.opendatetime=this.Opendatetime.value;
  
    this.submitted = true;
  
    this.save();
  
 
  }
 
   save() {
  
    this.ipodetailsservice.saveIpoDetails(this.ipodetails)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.ipodetails = new Ipodetails();
    window.localStorage.removeItem("edit-ipoid");
   }

   get Ipoid(){
  
    return this.ipodetailssaveform.get('ipoid');
  
   }
  
  
   get Companyname(){
  
    return this.ipodetailssaveform.get('companyname');
  
   }
  
  
  

   get Stockexchange(){
  
    return this.ipodetailssaveform.get('stockexchange');
  
   }

   get Pricepershare(){
  
    return this.ipodetailssaveform.get('pricepershare');
  
   }

   get Totalnoofshares(){
  
    return this.ipodetailssaveform.get('totalnoofshares');
  
   }

   get Opendatetime(){
  
    return this.ipodetailssaveform.get('opendatetime');
  
   }
  
   saveIpoDetailsForm(){
  
    this.submitted=false;
  
    this.ipodetailssaveform.reset();
  
   }
  
  }