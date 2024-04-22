import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts('')
      .subscribe((products) => (this.products = products));
  }
}
