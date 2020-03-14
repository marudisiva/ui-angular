import { Component, OnInit } from '@angular/core';
import { SectorsserviceService } from 'src/app/sectorsservice.service';
import { Sectors } from 'src/app/sectors';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorslist',
  templateUrl: './sectorslist.component.html',
  styleUrls: ['./sectorslist.component.css']
})
export class SectorslistComponent implements OnInit {


 isupdated: boolean;
 constructor(private router:Router,private sectorsserviceservice: SectorsserviceService) { }
 sectorsList: Observable<Sectors[]>;
 ngOnInit() {
  this.sectorsserviceservice.getAllSectors().subscribe(data => {
   this.sectorsList = data;
  })
}
deleteSectors(sectors : Sectors ) {

  this.sectorsserviceservice.deleteSectors(sectors.sectorid)

   .subscribe(

    data => {

     this.sectorsserviceservice.getAllSectors().subscribe(data =>{

      this.sectorsList =data;

      });



    }) ;

 };

 updateSectors(sectors : Sectors ) {

 window.localStorage.removeItem("edit-sectorid");

 window.localStorage.setItem("edit-sectorid", sectors.sectorid.toString());

 this.router.navigate(['sectors']);

 };
}
