import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  products = {
    title: '',
    image: '',
    price: 0,
    inStock: true,
  };
  handleSubmit(productForm: any) {
    console.log('productForm', productForm);
  }
}
