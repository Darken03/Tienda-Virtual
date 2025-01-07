import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
  imports: [CommonModule]
})
export class SlidebarComponent {
  // Opciones de visualización
  opciones = [
    { nombre: 'Hombres', valor: 'lista' },
    { nombre: 'Mujeres', valor: 'cuadricula' },
    { nombre: 'Niños', valor: 'detalles' }
  ];

  // Variable para almacenar la opción seleccionada
  opcionSeleccionada: string = this.opciones[0].valor;

  seleccionarOpcion(valor: string) {
    this.opcionSeleccionada = valor;
    console.log('Opción seleccionada:', this.opcionSeleccionada);
    // Aquí puedes emitir un evento o llamar a un servicio para actualizar la vista principal
  }
}
