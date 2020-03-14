import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from 'src/app/companyservice.service';
import { Company } from 'src/app/company';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})

export class CompanylistComponent implements OnInit {
  

 isupdated: boolean;
 constructor(private router:Router,private companyserviceservice: CompanyserviceService) { }
 companyList: Company[];
 ngOnInit() {
  this.companyserviceservice.getAllcompanies().subscribe(data => {
   this.companyList = data;
  
  })
}
deleteCompany(company : Company ) {

  this.companyserviceservice.deleteCompany(company.companyname)

   .subscribe(

    data => {

     this.companyserviceservice.getAllcompanies().subscribe(data =>{

      this.companyList =data;

      });

    }) ;

 };

 updateCompany(company : Company ) {

 window.localStorage.removeItem("edit-companyname");

 window.localStorage.setItem("edit-companyname", company.companyname.toString());

 this.router.navigate(['updatecompany']);

 };


}




