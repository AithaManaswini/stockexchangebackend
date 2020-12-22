import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  excel:File |null;
  constructor(private cs:CompaniesService) { }

  ngOnInit(): void {
  }
  uploadexcel():void{
  this.cs.upload(this.excel).subscribe(
    Response =>{
      console.log(Response);
    },
  error =>{
    console.log(error);

    });
  }
    


}

