import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userservice:UserserviceService) { }
  
  user : User=new User();
 
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }
  usersaveform=new FormGroup({
  
    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] )
  });
  
  get Username(){
  
    return this.usersaveform.get('username');
  
   }
   get Password(){
  
    return this.usersaveform.get('password');
  
   }
  findByUsernameAndPassword(findByUsernameAndPassword){
  
    this.user=new User();
  
    this.user.username=this.Username.value;
  
    this.user.password=this.Password.value;
    this.submitted = true;
    this.userservice.findByUsernameAndPassword(this.user.username,this.user.password)
  
    .subscribe(data => { this.user=data;
 
    if(this.user!=null && this.user.usertype=='admin'){
      alert("2222"+this.user.usertype);
      this.router.navigate(['/admin']);
   
     }
   
     else if(this.user!=null && this.user.usertype=='user'){
   
      this.router.navigate(['user']);
   
     }
   else{
       this.router.navigate(['login']);
   }
   
   
    },
   
      error => console.log(console.error()));
   
    }
  
  }
   
   
   

