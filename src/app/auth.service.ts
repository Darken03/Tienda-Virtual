import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private emailValido = 'Jose@gmail.com';
  private passwordValido = '123456';

  constructor() { }

  verificarCredenciales(email: string, password: string): boolean {
    return email === this.emailValido && password === this.passwordValido;
  }
}