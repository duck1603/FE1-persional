import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lession',
  imports: [CommonModule, FormsModule],
  templateUrl: './lession.html',
  styleUrl: './lession.css',
})
export class Lession {
  title = 'Product List';
  isAvailable = true;
  productName = '';
  products = [
    {
      id: 1,
      name: 'Giày Nike Air Max',
      image: 'https://picsum.photos/seed/nike/400/300',
      price: 2200000,
      status: true,
    },
    {
      id: 2,
      name: 'Giày Adidas UltraBoost',
      image: 'https://picsum.photos/seed/nike/400/300',
      price: 2500000,
      status: false,
    },
    {
      id: 3,
      name: 'Giày Converse Classic',
      image: 'https://picsum.photos/seed/nike/400/300',
      price: 1100000,
      status: true,
    },
  ];

  handleClick() {
    alert('Button clicked!');
  }
}
