import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    {
      id: 1,
      name: 'Giày Nike Air Max',
      price: 2200000,
      image: 'https://picsum.photos/seed/nike/400/300',
      inStock: true,
    },
    {
      id: 2,
      name: 'Giày Adidas UltraBoost',
      price: 2500000,
      image: 'https://picsum.photos/seed/nike/400/300',
      inStock: false,
    },
    {
      id: 1,
      name: 'Giày Nike Air Max',
      price: 1100000,
      image: 'https://picsum.photos/seed/nike/400/300',
      inStock: true,
    },
  ];
}
