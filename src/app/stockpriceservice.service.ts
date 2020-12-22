import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL='http://localhost:8904/stockprice';
@Injectable({
  providedIn: 'root'
})
export class StockpriceserviceService {
  
  
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
  upload(data):Observable<any>{
    return this.http.post('http://localhost:8904/api/excel/upload',data);
  }
}
