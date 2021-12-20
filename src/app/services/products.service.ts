import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url?: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    }); 
    console.log(sessionStorage.getItem('token'));
    
    let obs = this.http.get<Product[]>(`${this.url}/pwe/getAllProdutos`, { headers: header });
      
    obs.subscribe(
      (resp) => {
        console.log(resp);
        
      }
    );
    return obs;
  }

  public registerProduct(product: Product) {
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    }); 
    
    let obs = this.http.post(`${this.url}/pwe/postProduto`, product, { headers: header });
    obs.subscribe(
      (resp) => {
        console.log(resp)
      }      
    );
    return obs;
  }
}
