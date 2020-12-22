import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseURL='http://localhost:8904/companies';
const url='http://localhost:8904/companies/name';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  username="javainadminuse"; password="password"
  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    
    return this.http.get(baseURL);
  }
  get(name):Observable<any>{
    return this.http.get(`${url}/${name}`);
  }
  create(data):Observable<any>{
    return this.http.post(baseURL,data);
  }
  update(id,data):Observable<any>{
    return this.http.put(`${baseURL}/${id}`,data);
  }
  delete(name):Observable<any>{
    return this.http.delete(`${baseURL}/${name}`)
  }
  findByname(name): Observable<any> {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    console.log(headers);
    console.log('header');
    return this.http.get(`${baseURL}/${name}`,{headers});
  }
  upload(data):Observable<any>{
    
    
    return this.http.post('http://localhost:8904/api/excel/upload',data);
  }
}
