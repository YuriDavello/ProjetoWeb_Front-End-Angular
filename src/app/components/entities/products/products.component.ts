import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  available?: boolean = false;
  unavailable?: boolean = false;
  sessionProducts: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productsService.getProducts()
      .subscribe(
        (products) => {
          this.products = products;
        }
      );
  }

  public addToCart(product: Product) {
    let productsGet: Product[] = JSON.parse(sessionStorage.getItem('products')!);
    if (productsGet == null) {
      productsGet = [];
    }
    productsGet.push(product);
    window.sessionStorage.setItem('products', JSON.stringify(productsGet));
  }
}
