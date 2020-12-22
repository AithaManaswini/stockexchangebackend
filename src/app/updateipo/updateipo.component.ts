import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { IposerviceService } from '../iposervice.service';

@Component({
  selector: 'app-updateipo',
  templateUrl: './updateipo.component.html',
  styleUrls: ['./updateipo.component.css']
})
export class UpdateipoComponent implements OnInit {

  ipo={
    cname:'',
    
    stockexchange:'',
    price:'',
    totalshares:'',
    opendate:'',
    remarks:''

  };
  constructor(private ip:IposerviceService ,private lp:HttpClientService) { }

  ngOnInit(): void {
  }
  addstockexchange():void{
    const data={
      cname:this.ipo.cname,
    
      stockexchange:this.ipo.stockexchange,
      price:this.ipo.price,
      totalshares:this.ipo.totalshares,
      opendate:this.ipo.opendate,
      remarks:this.ipo.remarks
    };
    this.lp.createipo(data).subscribe(Response =>{
      console.log(Response);
    },
  error =>{
    console.log(error);
  
    });
  }

  

}