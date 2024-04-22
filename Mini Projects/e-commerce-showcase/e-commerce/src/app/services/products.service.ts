import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(limit: string): Observable<Product[]> {
    this.url = this.url + limit;
    return this.http.get<Product[]>(this.url);
  }
}
