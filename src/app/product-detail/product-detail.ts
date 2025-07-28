import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = {
    id: 1,
    name: 'Giày Nike Air Max',
    price: 2200000,
    image: 'https://picsum.photos/seed/nike/400/300',
    inStock: true,
  };

  productId: string | null = null; // Chứa id lấy từ URL

  constructor(private route: ActivatedRoute) {} // ActivatedRoute là dịch vụ của Angular Router, cho phép lấy thông tin từ URL

  // ngOnInit dùng để cập nhật những gì thay đổi
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
