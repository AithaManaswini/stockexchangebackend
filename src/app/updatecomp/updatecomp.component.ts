import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class UpdatecompComponent implements OnInit {
  Company={
    name:'',
    turnover:'',
    ceo:'',
    listed:false,
    sector:'',
    brief:'',
    
    stockcode:1234,

  };
 
  currentCompany=null;
 

  
  constructor(
    private cs:CompaniesService,
    private route:ActivatedRoute,
    private router:Router,
    private ls:HttpClientService
  ) { }

  ngOnInit(): void {
   
    this.getcomp(this.route.snapshot.paramMap.get('name'));
   
    
    // this.getcomp(this.route.snapshot.paramMap.get('name'));
    console.log(this.route.snapshot.paramMap.get('name'));
  }
  getcomp(i):void{
    this.ls.get(i).subscribe(
      data =>{
        this.currentCompany=data;
        console.log(data);
        
        
      },
      error=>{
        console.log(error);
        
        
      }
      );
  }
  updatecompany():void{
    this.ls.update(this.currentCompany.id,this.Company).subscribe(
      response =>{
       
        console.log(Response);
    },
      error =>{
        console.log(error);
      
        });
  }
  deletecompany():void{
    this.ls.delete(this.currentCompany.name).subscribe(
      response =>{
       
        console.log(Response);
    },
      error =>{
        console.log(error);
      
        });
    
  }
      }
   