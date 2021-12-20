import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productName?: string;
  productQuantity?: number;
  productValue?: number;

  product?: Product = new Product();

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  public registerProduct() {
    console.log("ts")
    this.product!.nome = this.productName;
    this.product!.quantidade = this.productQuantity;
    this.product!.valor = this.productValue;

    this.ProductsService.registerProduct(this.product!);
  }

}
