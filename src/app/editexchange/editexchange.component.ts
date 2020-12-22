import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from '../exchangeservice.service';

@Component({
  selector: 'app-editexchange',
  templateUrl: './editexchange.component.html',
  styleUrls: ['./editexchange.component.css']
})
export class EditexchangeComponent implements OnInit {
  se:any;
  constructor(private ex:ExchangeserviceService) { }

  ngOnInit(): void {
    this.retrievese();
  }
  retrievese():void{
    this.ex.getAll().subscribe(
      data =>{
        this.se=data;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
