// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  iniciarSesion() {
    if (this.authService.verificarCredenciales(this.email, this.password)) {
      // Redirigir al dashboard
      alert('Credenciales incorrectas');
    } else {

      this.router.navigate(['/home']);
    }
  }
}

