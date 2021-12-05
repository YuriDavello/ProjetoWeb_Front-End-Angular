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

  public isAvailable() {
    for (let product of this.products) {
      if (product.quantidade! > 0) {
        console.log("maior que 0")
        this.available = true;
      } else {
        console.log("0")
        this.available = false;
      }
    }
  }

}
