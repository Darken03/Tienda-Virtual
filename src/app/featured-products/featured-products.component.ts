import { Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../cart.service'; // Asegúrate de importar la interfaz Product
import { CartService } from '../cart.service'; // Importa el servicio del carrito

@Component({
  standalone: true,
  selector: 'app-featured-products',
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  @ViewChildren('productElement') productElements!: QueryList<ElementRef>;
  
  productsMujer: Product[] = [
    { id: 1, name: 'Producto Mujer 1', price: 22.95, image: 'assets/product1.jpg', category: 'mujer', description: 'Descripción del producto para mujer 1.', quantity: 1 },
    { id: 2, name: 'Producto Mujer 2', price: 34.95, image: 'assets/product2.png', category: 'mujer', description: 'Descripción del producto para mujer 2.', quantity: 1 }
  ];

  productsHombre: Product[] = [
    { id: 3, name: 'Producto Hombre 1', price: 18.95, image: 'assets/product3.jpg', category: 'hombre', description: 'Descripción del producto para hombre 1.', quantity: 1 },
    { id: 4, name: 'Producto Hombre 2', price: 28.95, image: 'assets/product4.png', category: 'hombre', description: 'Descripción del producto para hombre 2.', quantity: 1 }
  ];

  productsNinos: Product[] = [
    { id: 5, name: 'Producto Niño 1', price: 15.95, image: 'assets/product5.jpg', category: 'ninos', description: 'Descripción del producto para niño 1.', quantity: 1 },
    { id: 6, name: 'Producto Niño 2', price: 10.95, image: 'assets/product6.png', category: 'ninos', description: 'Descripción del producto para niño 2.', quantity: 1 }
  ];

 activeProducts: { [id: number]: boolean } = {};  

  isFavorite = false;

  constructor(private cartService: CartService) {}

  toggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
  }

  toggleCart(product: Product, event: MouseEvent): void {
     event.stopPropagation(); 
     if (this.activeProducts[product.id])
     { this.cartService.removeFromCart(product); 
      this.activeProducts[product.id] = false; }
       else { 
        this.cartService.addToCart(product);
         this.activeProducts[product.id] = true;
         } 
        } 
        viewDetails(product: Product): void {
           const element = this.productElements.find(el => el.nativeElement.id === `product-${product.id}`);
            if (element) { 
              element.nativeElement.scrollIntoView({
                behavior: 'smooth' }); } }

              scrollToCategory(categoryId: string): void {
                const element = document.getElementById(categoryId); 
                if (element) {
                   element.scrollIntoView({ behavior: 'smooth' }); 
            }
          }
    }