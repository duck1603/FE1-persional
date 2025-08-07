import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

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

  constructor(
    private productService: ProductService,
    private toast: ToastService,
    private router: Router
  ) {}

  handleSubmit(productForm: NgForm) {
    console.log('productForm', productForm);
    if (productForm.valid) {
      this.productService.createProduct(productForm.value).subscribe({
        next: () => {
          console.log('Submit thành công');
          this.toast.success('Submit thành công');
          this.router.navigate(['/products']);
        },
        error: () => {
          this.toast.error('Submit thất bại');
        },
      });
    }
  }
}
