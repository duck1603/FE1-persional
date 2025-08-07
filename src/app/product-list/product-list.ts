import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Products, ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // products = [
  //   {
  //     id: 1,
  //     name: 'Giày Nike Air Max',
  //     price: 2200000,
  //     image: 'https://picsum.photos/seed/nike/400/300',
  //     inStock: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'Giày Adidas UltraBoost',
  //     price: 2500000,
  //     image: 'https://picsum.photos/seed/nike/400/300',
  //     inStock: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'Giày Nike',
  //     price: 1100000,
  //     image: 'https://picsum.photos/seed/nike/400/300',
  //     inStock: true,
  //   },
  // ];

  products: Products[] = [];

  filterText = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProduct().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
