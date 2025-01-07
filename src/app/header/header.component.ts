import { Component, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService, Product } from '../cart.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements AfterViewInit {
  openDropdownId: string | null = null;
  cartProducts: Product[] = [];
  cartCount = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private cartService: CartService
  ) {
    this.cartService.cart$.subscribe(cart => {
      this.cartProducts = cart;
      this.cartCount = this.cartService.getCartCount();
    });
  }

  ngAfterViewInit(): void {}

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    if (this.openDropdownId) {
      const dropdownMenu = this.el.nativeElement.querySelector(`#${this.openDropdownId}`);
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeDropdown(this.openDropdownId);
      }
    }
  }

  toggleDropdown(event: Event, dropdownId: string): void {
    event.stopPropagation();
    if (this.openDropdownId && this.openDropdownId === dropdownId) {
      this.closeDropdown(dropdownId);
    } else {
      if (this.openDropdownId) {
        this.closeDropdown(this.openDropdownId);
      }
      this.openDropdownId = dropdownId;
      const dropdownMenu = this.el.nativeElement.querySelector(`#${dropdownId}`);
      this.renderer.setStyle(dropdownMenu, 'display', 'block');
    }
  }

  navigateToLogin(event: Event): void {
    event.stopPropagation();
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }

  navigateToRegister(event: Event): void {
    event.stopPropagation();
    this.router.navigateByUrl('/register').then(() => {
      window.location.reload();
    });
  }

  closeDropdown(dropdownId: string): void {
    const dropdownMenu = this.el.nativeElement.querySelector(`#${dropdownId}`);
    this.renderer.setStyle(dropdownMenu, 'display', 'none');
    this.openDropdownId = null;
  }

  viewCart(): void {
    this.router.navigate(['/cart']); // Redirigir a la página del carrito
  }
}
