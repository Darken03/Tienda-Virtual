import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, Router} from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, RouterModule, AppComponent]
})
export class HomeComponent {}
