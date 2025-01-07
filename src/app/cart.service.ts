import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category:  'mujer' | 'hombre' | 'ninos';
  description: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cart.value;
    const productIndex = currentCart.findIndex(item => item.id === product.id);
    if (productIndex > -1) {
      currentCart[productIndex].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    this.cart.next(currentCart);
  }

  removeFromCart(product: Product): void {
    const currentCart = this.cart.value;
    const productIndex = currentCart.findIndex(item => item.id === product.id);
    if (productIndex > -1) {
      currentCart[productIndex].quantity -= 1;
      if (currentCart[productIndex].quantity === 0) {
        currentCart.splice(productIndex, 1);
      }
    }
    this.cart.next(currentCart);
  }

  getCartCount(): number {
    return this.cart.value.reduce((total, product) => total + product.quantity, 0);
  }

  getCart(): Product[] {
    return this.cart.value;
  }
}
