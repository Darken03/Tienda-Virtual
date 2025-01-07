import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from '../cart.service';

@Component({
  standalone: true,
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  imports: [CommonModule]
})
export class CartPageComponent {
  cartProducts: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.cartProducts = cart;
    });
  }
}

