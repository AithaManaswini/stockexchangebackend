
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagecompComponent } from './managecomp/managecomp.component';

import { ManageexchangesComponent } from './manageexchanges/manageexchanges.component';
// import { EdictcompanyComponent } from './edictcompany/edictcompany.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { EditexchangeComponent } from './editexchange/editexchange.component';
import { NewexchangeComponent } from './newexchange/newexchange.component';
import { UpdateexchangeComponent } from './updateexchange/updateexchange.component';
import { UpdateipoComponent } from './updateipo/updateipo.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';
import { SignupComponent } from './signup/signup.component';
// Load fusion theme

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ImportDataComponent,
    NewcompanyComponent,
    UserComponent,
    LandingComponent,
    ManagecompComponent,
    ManageexchangesComponent,
    EditcompanyComponent,
    UpdatecompComponent,
    EditexchangeComponent,
    NewexchangeComponent,
    UpdateexchangeComponent,
    UpdateipoComponent,
    LoginComponent,
    UpdateuserComponent,
    CreateuserComponent,
    LogoutComponent,
    AdminloginComponent,
    SignupComponent,
    
   
  ],
  imports: [
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
    
    
  ],
  providers: [HttpClientModule,{
    provide:HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorServiceService, multi:true
  }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
