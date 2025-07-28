import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { UserList } from './user-list/user-list';
import { Lession } from './lession/lession';
import { BrandList } from './brand-list/brand-list';
import { ProductCreate } from './product-create/product-create';
import { ProductDetail } from './product-detail/product-detail';

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
    path: 'product/:id/detail',
    component: ProductDetail,
  },
  {
    path: 'products/create',
    component: ProductCreate,
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
