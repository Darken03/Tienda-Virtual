import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,SlidebarComponent, SearchBarComponent, CategoriasComponent, LoginComponent, RegisterComponent, RouterModule, FeaturedProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Virtual';
 

}