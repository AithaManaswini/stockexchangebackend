import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL="http://localhost:8904/companies";
const url='http://localhost:8904/companies/name';
export class user{
  constructor(
    
    public username:string,
    public email:string,
    public mobile:string,
    public pasword:string,
    public usertype:'user',
    public confirmed:'yes',
    
      ) {}
  
}
export class ipo{
  constructor(
    
    public cname:string,
    public stockexchange:string,
    public ceo:string,
    public remarks:string,
    public price:number,
    public opendateandtime:string,
    public totalshares:number
      ) {}
  
}
export class company{
  constructor(
    
    public username:string,
    public password:string,
    public usertype:string,
    public email:string,
    public mobileno:number,
    public confirmed:boolean
  ) {}
  
}
@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor( private http:HttpClient) { }
  getAll():Observable<any>{
    // let username='javaadmininuse'
    // let username="techgeeknext"
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8904/companies');
  }
  findByname(name): Observable<any> {
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.get<company[]>(`${baseURL}/${name}`);
  }
  public create(company) {
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.post<company>(
      baseURL,
      company
    );
  }
  public createuser(user) {
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.post<user>(
      "http://localhost:8904/users",
      user
    );
  }
  public createipo(ipo) {
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.post<ipo>(
      "http://localhost:8904/ipo",
      ipo
    );
  }
  public delete(name) {
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.delete<company>(
      "http://localhost:8904/companies" + "/" + name
    );
  }
  public get(name):Observable<any>{
    // let username='javaadmininuse'
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.get<company>(`${url}/${name}`);
  }
  public update(id,company) {
    return this.http.put<company>("http://localhost:8904/companies" + "/" + id,
      company
    );
  }
  getAllipo():Observable<any>{
    // let username='javaadmininuse'
    // let username="techgeeknext"
    // let password='password'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8904/ipo');
  }

}