import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  totalValue?: number;

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(window.sessionStorage.getItem('products')!);
    this.calculateTotalValue();
    this.totalValue = this.calculateTotalValue();
  }

  public removeFromCart(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    window.sessionStorage.setItem('products', JSON.stringify(this.products));
    this.totalValue = this.calculateTotalValue();
  }

  public calculateTotalValue() {
    let value = 0;
    if (this.products == null) return 0;

    for (let product of this.products) {
      value += product.valor!;
    }
    return value;
  }

}
