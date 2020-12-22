import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from '../exchangeservice.service';

@Component({
  selector: 'app-newexchange',
  templateUrl: './newexchange.component.html',
  styleUrls: ['./newexchange.component.css']
})
export class NewexchangeComponent implements OnInit {

  stockexchange={
    stockexchange:'',
    
    brief:'',
    contact:'',
    remarks:''

  };
  constructor(private ex:ExchangeserviceService ) { }

  ngOnInit(): void {
  }
  addstockexchange():void{
    const data={
      stockexchange:this.stockexchange.stockexchange,    
      brief:this.stockexchange.brief,
      contact:this.stockexchange.contact,
      remarks:this.stockexchange.remarks
    };
    this.ex.create(data).subscribe(Response =>{
      console.log(Response);
    },
  error =>{
    console.log(error);
  
    });
  }

  

}