import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL='http://localhost:8904/users';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  
  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(baseURL);
  }
  get(name):Observable<any>{
    return this.http.get(`${baseURL}/${name}`);
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
    return this.http.get(`${baseURL}/${name}`);
  }
  
}
