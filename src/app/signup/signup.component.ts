import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User={
   email:'',
   confirmed:'',
   mobile:'',
   password:'',
   username:'',
   usertype:'user'


  };
  constructor(private ls:HttpClientService,private us:UserserviceService) { }

  ngOnInit(): void {
  }
  sign():void{
    const data={
      email:this.User.email,
      confirmed:'yes',
      mobile:this.User.mobile,
      password:this.User.password,
      username:this.User.username,
      usertype:'user'
    };
    this.us.create(data).subscribe(Response =>{
      console.log(Response);
    },
  error =>{
    console.log(error);
  
    });
  }
}
