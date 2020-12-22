import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';
// import { AuthGaurdService } from './auth-gaurd.service';
import { CcompComponent } from './ccomp/ccomp.component';
import { CsectorsComponent } from './csectors/csectors.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditexchangeComponent } from './editexchange/editexchange.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { IpoComponent } from './ipo/ipo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagecompComponent } from './managecomp/managecomp.component';
import { ManageexchangesComponent } from './manageexchanges/manageexchanges.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { NewexchangeComponent } from './newexchange/newexchange.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { UpdateipoComponent } from './updateipo/updateipo.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"Importdata",component:ImportDataComponent},
  {path:"editcomp",component: EditcompanyComponent},
  {path:"editexch",component: EditexchangeComponent},
  {path:"managecomp",component: ManagecompComponent},
  {path:"managese",component: ManageexchangesComponent},
  {path:"admin",component:AdminloginComponent},
  {path:'afterlogin',component:UserComponent},


  {path:'afteradminlogin',component:AdminComponent},
  
  {path:'signup',component:SignupComponent},
  {path:"user",component:LoginComponent},
  {path:"addcomp",component: NewcompanyComponent},
  {path:"addexch",component: NewexchangeComponent},
  {path:"update/:name",component: UpdatecompComponent},
  {path:"updateipo",component: UpdateipoComponent},
  {path:"ipo",component: IpoComponent},
  {path:"updateuser",component: UpdateuserComponent},
  {path:"comparesectors",component:CsectorsComponent},
  {path:"comparecomp",component: CcompComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  providers:[{
    provide:HTTP_INTERCEPTORS,useClass:BasicAuthHttpInterceptorServiceService,multi:true
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
