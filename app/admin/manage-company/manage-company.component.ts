import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from 'src/app/companyservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Company } from 'src/app/company';
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {
 



 
   constructor(private companyservice:CompanyserviceService) { }
  
   company : Company=new Company();
  
   submitted = false;
 
   ngOnInit() {
  
    this.submitted=false;
  
   }
  
   companysaveform=new FormGroup({
  
    companyname:new FormControl('' , [Validators.required  ] ),
  
    turnover:new FormControl('' , [Validators.required  ] ),

    ceoname:new FormControl('' , [Validators.required  ] ),
  
    bod:new FormControl('',[Validators.required]),
  
    listedinse:new FormControl('',[Validators.required]),

    sector:new FormControl('',[Validators.required]),

    remarks:new FormControl('',[Validators.required]),

    stockcode:new FormControl('',[Validators.required ])
   });
  
  
  
   saveCompany(saveCompany){
 
    this.company=new Company();
  
    this.company.companyname=this.Companyname.value;
    this.company.turnover=this.Turnover.value
    this.company.ceoname=this.Ceoname.value;
    this.company.bod=this.Bod.value;
    this.company.listedinse=this.Listedinse.value;
    
    this.company.sector=this.Sector.value;
    this.company.remarks=this.Remarks.value;
    this.company.stockcode=this.Stockcode.value;
  
    this.submitted = true;
  
    this.save();
 
  
   }
 
   save() {
  
    this.companyservice.saveCompany(this.company)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.company = new Company();
  
   }
  
   get Companyname(){
  
    return this.companysaveform.get('companyname');
  
   }
  
   get Turnover(){
  
    return this.companysaveform.get('turnover');
  
   }
  
   get Ceoname(){
  
    return this.companysaveform.get('ceoname');
  
   }
  
   get Bod(){
  
    return this.companysaveform.get('bod');
  
   }

   get Listedinse(){
  
    return this.companysaveform.get('listedinse');
  
   }

   get Sector(){
  
    return this.companysaveform.get('sector');
  
   }

   get Remarks(){
  
    return this.companysaveform.get('remarks');
  
   }

   get Stockcode(){
  
    return this.companysaveform.get('stockcode');
  
   }
  
   saveCompanyForm(){
  
    this.submitted=false;
  
    this.companysaveform.reset();
  
   }
  
  }