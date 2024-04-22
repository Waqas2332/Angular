import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = false;
  constructor(private productService: ProductsService) {}

  fetchProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
