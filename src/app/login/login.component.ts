import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  imports: [FormsModule, HttpClientModule],
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Manejar la respuesta exitosa (ej. redirigir al usuario)
        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
      },
      error => {
        // Manejar el error (ej. mostrar mensaje)
        this.errorMessage = 'Credenciales incorrectas';
      }
    );
  }
}