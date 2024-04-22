import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../Product';
import { Router } from '@angular/router';

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
  constructor(private productService: ProductsService, private route: Router) {}

  fetchProducts() {
    this.productService.fetchProducts().subscribe((products) => {
      this.productService.setProducts(products);
      this.products = this.productService.getProducts().slice(0, 3);
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  allProductPage() {
    this.route.navigate(['products']);
  }
}
