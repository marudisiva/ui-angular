import { Component, OnInit } from '@angular/core';
import { SectorsserviceService } from 'src/app/sectorsservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Sectors } from 'src/app/sectors';
@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

 
   constructor(private sectorsserviceservice:SectorsserviceService) { }
  
   sectors : Sectors=new Sectors();
  
   submitted = false;
 
   ngOnInit() {

    var sectorid=window.localStorage.getItem("edit-sectorid");
    if(sectorid!=null && sectorid!=""){
    this.sectorsserviceservice.findOneInAll(parseInt(sectorid))
  
      .subscribe(
  
       data => {
  
        this.sectors =data;
  
        this.sectorssaveform.setValue(this.sectors);
  
       }) ;
  
  
  
    this.submitted = false;
  
   }}
  
  
   sectorssaveform=new FormGroup({
  

    sectorid:new FormControl('',[Validators.required]),

    sectorname:new FormControl('',[Validators.required]),

    brief:new FormControl('',[Validators.required ])
   });
  
  
  
   saveSectors(saveSectors){

    this.sectors=new Sectors();
    this.sectors.sectorid=this.Sectorid.value;
    this.sectors.sectorname=this.Sectorname.value;
    this.sectors.brief=this.Brief.value;
  
    this.submitted = true;
  
    this.save();
     }
  
   
 
   save() {
  
    this.sectorsserviceservice.saveSectors(this.sectors)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.sectors = new Sectors();
    window.localStorage.removeItem("edit-sectorid");
   }
  
  
  
   get Sectorid(){
  
    return this.sectorssaveform.get('sectorid');
  
   }

   get Sectorname(){
  
    return this.sectorssaveform.get('sectorname');
  
   }

   get Brief(){
  
    return this.sectorssaveform.get('brief');
  
   }
  
   saveSectorsForm(){
  
    this.submitted=false;
  
    this.sectorssaveform.reset();
  
   }
  
  }