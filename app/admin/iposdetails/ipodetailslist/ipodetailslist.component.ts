import { Component, OnInit } from '@angular/core';
import { Ipodetails } from 'src/app/ipodetails';
import { Observable } from 'rxjs/internal/Observable';
import { IpodetailsserviceService } from 'src/app/ipodetailsservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ipodetailslist',
  templateUrl: './ipodetailslist.component.html',
  styleUrls: ['./ipodetailslist.component.css']
})
export class IpodetailslistComponent implements OnInit {

  isupdated: boolean;
  constructor(private router:Router,private ipodetailsserviceservice: IpodetailsserviceService) { }
  ipodetailsList: Observable<Ipodetails[]>;
  ngOnInit() {
   this.ipodetailsserviceservice.getAllIpoDetails().subscribe(data => {
    this.ipodetailsList = data;
   })
 }
 deleteIpoDetails(ipodetails : Ipodetails ) {

  this.ipodetailsserviceservice.deleteIpoDetails(ipodetails.ipoid)

   .subscribe(

    data => {

     this.ipodetailsserviceservice.getAllIpoDetails().subscribe(data =>{

      this.ipodetailsList =data;

      });



    }) ;

 };

 updateIpoDetails(ipodetails : Ipodetails ) {

 window.localStorage.removeItem("edit-ipoid");

 window.localStorage.setItem("edit-ipoid", ipodetails.ipoid.toString());

 this.router.navigate(['iposdetails']);

 };
}
