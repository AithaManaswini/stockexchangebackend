import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from '../exchangeservice.service';

@Component({
  selector: 'app-manageexchanges',
  templateUrl: './manageexchanges.component.html',
  styleUrls: ['./manageexchanges.component.css']
})
export class ManageexchangesComponent implements OnInit {

  
exchanges: Array<any>;
  constructor(private ex:ExchangeserviceService) { }

  ngOnInit(): void {
    this.ex.getAll().subscribe(data =>{
    this.exchanges=data;

   
    });


  }
  
}
