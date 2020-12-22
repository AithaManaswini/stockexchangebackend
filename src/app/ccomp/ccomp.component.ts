import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StockpriceserviceService } from '../stockpriceservice.service';
const time=[];
const price=[];
const det={
  time:'',
  price:''
};
@Component({
  selector: 'app-ccomp',
  templateUrl: './ccomp.component.html',
  styleUrls: ['./ccomp.component.css']
})
export class CcompComponent implements OnInit {
  company:any;
  d={
    comp:'AITHA',
    stock:'NSE',
    from:'10:00:00',
    to:'10:30:00'
  };
  
  a:number;
  b:any;
  c:number;
  stockpricelist: any;

  constructor(private cs:CompaniesService,private sps:StockpriceserviceService) { }

  ngOnInit(): void {
     this.retrieveCompanies();
     this.retrievesps();
     
  }
  retrieveCompanies():void{
    this.cs.getAll().subscribe(
      data =>{
        this.company=data;
        this.a=this.company.length;
        // console.log(this.company);
        // console.log(this.company);
        // console.log(typeof(this.company));
        // console.log(this.company.getKeys);
        
    
        
      },
      error =>{
        console.log(error);
      }
    );
  }
  retrievesps():void{
    this.sps.getAll().subscribe(
      data =>{
        this.stockpricelist=data; 
        this.c=this.stockpricelist.length;
        console.log(this.stockpricelist);
        // console.log(this.b);
        },
      error =>{
        console.log(error);
      }
    );
    
  }
  
  verify():void{
    // console.log(this.d.stock);
    // console.log(this.d.comp);
    // console.log(this.d.from);
    // console.log(this.d.to);
    for (let i=0;i<this.c;i++){
         
      this.b=this.stockpricelist[i];
      // console.log(this.b.name);
      // console.log(this.b);
      if ((this.b.companycode==this.d.comp )&&(this.b.stockexchange==this.d.stock)){
        // time.push[this.b.time];
        // price.push[this.b.cprice];
        det[i].time=this.b.time;
        det[i].price=this.b.cprice;
      }
      
  }
    this.display();
    
    }

    display():void{
      console.log(time);
    }

  }

