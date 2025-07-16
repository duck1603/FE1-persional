import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Lession } from './lession/lession';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lession, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'QD_Sneaker';
}
