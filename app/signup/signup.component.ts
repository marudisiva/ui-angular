import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../userservice.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';

import { User } from '../user';

@Component({

 selector: 'app-signup',

 templateUrl: './signup.component.html',

 styleUrls: ['./signup.component.css']

})

export class SignupComponent implements OnInit {







  constructor(private userservice:UserserviceService) { }



  user : User=new User();

  submitted = false;

 selectedFiles: FileList;

  ngOnInit() {



  var username=window.localStorage.getItem("edit-username");

 if(username!=null && username!=""){

  this.userservice.findOneInAll(username)



   .subscribe(



    data => {



    this.user =data;



    this.usersaveform.setValue(this.user);



    }) ;







  this.submitted = false;



  }}

  selectFile(event) {



  const file = event.target.files.item(0);







  if (file.type.match('image.*')) {



   var size = event.target.files[0].size;



   if(size > 1000000)



   {



    alert("size must not exceeds 1 MB");



    this.usersaveform.get('profileimage').setValue("");



   }



   else



   {



   this.selectedFiles = event.target.files;



   }



  } else {



   alert('invalid format!');



  }



  }



  usersaveform=new FormGroup({



  username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),



  password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),



  confirm:new FormControl('' , [Validators.required ] ),



  email:new FormControl('',[Validators.required,Validators.email]),



  phone:new FormControl('',[Validators.required]),



  firstname:new FormControl('',[Validators.required]),



  lastname:new FormControl('',[Validators.required]),



  address:new FormControl('',[Validators.required]),



  age:new FormControl('',[Validators.required ]),



  profileimage: new FormControl()



  // usertype:new FormControl('',[Validators.required])

  });







  saveUser(saveUser){



  this.user=new User();



  this.user.username=this.Username.value;



  this.user.password=this.Password.value;

  this.user.confirm=this.Confirm.value

  this.user.email=this.Email.value;

  this.user.phone=this.Phone.value;

  this.user.firstname=this.Firstname.value;



  this.user.lastname=this.Lastname.value;

  this.user.address=this.Address.value;

  this.user.age=this.Age.value;

  this.user.profileimage=this.Profileimage.value;

  //this.user.usertype=this.Usertype.value;

  this.submitted = true;

  this.save();

 }





  save() {



  this.userservice.saveUser(this.user)



   .subscribe(data => console.log(data), error => console.log(error));



  this.user = new User();

  window.localStorage.removeItem("edit-username");

  }



  get Username(){



  return this.usersaveform.get('username');



  }

  get Password(){



  return this.usersaveform.get('password');



  }

  get Confirm(){



  return this.usersaveform.get('confirm');



  }



  get Email(){



  return this.usersaveform.get('email');



  }



  get Phone(){



  return this.usersaveform.get('phone');



  }



  get Firstname(){



  return this.usersaveform.get('firstname');



  }



  get Lastname(){



  return this.usersaveform.get('lastname');



  }



  get Address(){



  return this.usersaveform.get('address');



  }



  get Age(){



  return this.usersaveform.get('age');



  }

  get Usertype(){



  return this.usersaveform.get('usertype');



  }

  get Profileimage(){



  return this.usersaveform.get('profileimage');



  }

  saveUserForm(){



  this.submitted=false;



  this.usersaveform.reset();



  }



 }









