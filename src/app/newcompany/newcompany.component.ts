import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {

  Company={
    name:'',
    turnover:'',
    ceo:'',
    listed:false,
    sector:'',
    brief:'',
    
    stockcode:1234,

  };
  constructor(private cs:CompaniesService ,private hs:HttpClientService) { }

  ngOnInit(): void {
  }
  addcompany():void{
    const data={
      name:this.Company.name,
      turnover:this.Company.turnover,
      ceo:this.Company.ceo,
      listed:true,
      sector:this.Company.sector,
      brief:this.Company.brief,
      stockcode:this.Company.stockcode,
    };
    this.hs.create(data).subscribe(Response =>{
      console.log(Response);
    },
  error =>{
    console.log(error);
  
    });
  }

  

}
