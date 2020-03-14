import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../userservice.service';

import { User } from '../user';

import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';


@Component({
 selector: 'app-userlist',
 templateUrl: './userlist.component.html',
 styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

 isupdated: boolean;
 constructor(private router:Router,private userserviceservice: UserserviceService) { }
 userList: Observable<User[]>;
 ngOnInit() {
  this.userserviceservice.getAllusers().subscribe(data => {
   this.userList = data;
  })}
  deleteUser(user : User ) {

    this.userserviceservice.deleteUser(user.username)
 
     .subscribe(
 
      data => {
 
       this.userserviceservice.getAllusers().subscribe(data =>{
 
        this.userList =data;
 
        });
 
 
 
      }) ;
 
   };
 
   updateUser(user : User ) {
 
   window.localStorage.removeItem("edit-username");
 
   window.localStorage.setItem("edit-username", user.username.toString());
 
   this.router.navigate(['signup']);
 
   };
}


