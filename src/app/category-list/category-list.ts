import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  categories = [
    {
      id: 1,
      name: 'Lifestyle sneakers',
    },
    {
      id: 2,
      name: 'Running sneakers',
    },
    {
      id: 3,
      name: 'Training sneakers',
    },
    {
      id: 4,
      name: 'Skate sneakers',
    },
    {
      id: 5,
      name: 'Platform sneakers',
    },
  ];

  filterText = '';

  filterCategories() {
    return this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
