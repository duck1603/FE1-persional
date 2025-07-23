import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderNav } from './header-nav/header-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'QD_Sneaker';
}
