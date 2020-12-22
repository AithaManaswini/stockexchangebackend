import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  Router: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

   
  }

  
}
