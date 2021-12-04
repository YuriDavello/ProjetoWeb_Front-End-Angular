import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts() {
    let obs = this.http.get('http://localhost:8080/products')
      
    obs.subscribe(
      (resp) => {
        console.log(resp);
        
      }
    );
    return obs;
  }
}
