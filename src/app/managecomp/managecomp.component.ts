import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CompaniesService } from '../companies.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-managecomp',
  templateUrl: './managecomp.component.html',
  styleUrls: ['./managecomp.component.css']
})
export class ManagecompComponent implements OnInit {

  companies: Array<any>;
  constructor(private comp:CompaniesService,private ls: HttpClientService) { }

  ngOnInit(): void {
    this.ls.getAll().subscribe(data =>{
    this.companies=data;

   
    });


  }
delcom():void{
  
}
  
}
