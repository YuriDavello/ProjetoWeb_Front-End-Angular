import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    let obs = this.http.get<Product[]>('http://localhost:8080/pwe/getAllProdutos');
      
    obs.subscribe(
      (resp) => {
        console.log(resp);
        
      }
    );
    return obs;
  }
}
