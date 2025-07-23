import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList {
  brands = [
    {
      id: 1,
      name: 'Nike',
    },
    {
      id: 2,
      name: 'Adidas',
    },
    {
      id: 3,
      name: 'Puma',
    },
    {
      id: 4,
      name: 'Vans',
    },
  ];
}
