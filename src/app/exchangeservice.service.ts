import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL='http://localhost:8904/stockexchanges';
@Injectable({
  providedIn: 'root'
})
export class ExchangeserviceService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(baseURL);
  }
  get(name):Observable<any>{
    return this.http.get('http://localhost:8904/companies/name/{name}');
  }
  create(data):Observable<any>{
    return this.http.post('http://localhost:8904/stockexchanges',data);
  }
  update(id,data):Observable<any>{
    return this.http.put('http://localhost:8904/companies/{id}',data);
  }
  delete(name):Observable<any>{
    return this.http.delete('http://localhost:8904/companies/name')
  }

}
