import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/products',
      {headers: new HttpHeaders().set('Authorization','Bearer' + token)}
    );
  }
  getProduct(id: number){
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/products/' + id,
      {headers: new HttpHeaders().set('Authorization','Bearer' + token)}
    );
  }
  createProductRegistration(product){
    let body = JSON.stringify(product);
    return this.http.post('/server/api/v1/products', body, httpOptions);
  }
}
