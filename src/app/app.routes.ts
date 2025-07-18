import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { UserList } from './user-list/user-list';
import { Lession } from './lession/lession';
import { BrandList } from './brand-list/brand-list';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'users',
    component: UserList,
  },
  {
    path: 'categories',
    component: CategoryList,
  },
  {
    path: 'brands',
    component: BrandList,
  },
  {
    path: 'lession',
    component: Lession,
  },
];
