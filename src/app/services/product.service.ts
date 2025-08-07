import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Products = {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
};

export type ProductForm = Omit<Products, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct() {
    return this.http.get<Products[]>('http://localhost:3000/products');
  }

  createProduct(value: ProductForm) {
    return this.http.post('http://localhost:3000/products', value);
  }
}
