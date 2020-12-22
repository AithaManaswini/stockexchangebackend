import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { HttpClientService } from '../http-client.service';


@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})

export class EditcompanyComponent implements OnInit {
  company:any;
  name='';
  currentComp:null;
  currentIndex:-1;

  constructor(private cs:CompaniesService,private hs:HttpClientService) { }

  ngOnInit(): void {
    // this.retrieveCompanies();
  }
  retrieveCompanies():void{
    this.cs.getAll().subscribe(
      data =>{
        this.company=data;
      },
      error =>{
        console.log(error);
      }
    );
  }
  findbyname():void{
    this.cs.findByname(this.name).subscribe(
      data =>{
        this.company=data;
        console.log(data);
        
        
      },
      error=>{
        console.log(error);
        
        
      }
      );
        
      }
    setActivecomp(comp,index):void{
      this.currentIndex=index;
      this.currentComp=comp;
    }
    
    
  }


