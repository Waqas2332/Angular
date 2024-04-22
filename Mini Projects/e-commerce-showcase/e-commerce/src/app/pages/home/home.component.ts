import { Component } from '@angular/core';
import { HeroComponent } from '../../component/hero/hero.component';
import { FeaturedProductsComponent } from '../../component/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
