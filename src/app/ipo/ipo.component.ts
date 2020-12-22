import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { IposerviceService } from '../iposervice.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
  ipo={
    companyname:'',
    totalnoofshares:'',
    opendatetime:'',
    pricepershare:'',
    remarks:'',
    stockexchange:''

}
  constructor(private ip:IposerviceService,private ls:HttpClientService) { }

  ngOnInit(): void {
    this.retrieveipo();
  }
  retrieveipo():void{
    this.ls.getAllipo().subscribe(
      data =>{
        this.ipo=data;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
