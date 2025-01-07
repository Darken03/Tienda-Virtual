import { Component, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent implements AfterViewInit {
  @Input() province = '';
  provinces = [
    { id: 1, name: 'Isla de la Juventud' },
    { id: 2, name: 'Guantánamo' },
    { id: 3, name: 'Santiago de Cuba' },
    { id: 4, name: 'Granma' },
    { id: 5, name: 'Holguín' },
    { id: 6, name: 'Las Tunas' },
    { id: 7, name: 'Camagüey' },
    { id: 8, name: 'Ciego de Ávila' },
    { id: 9, name: 'Sancti Spíritus' },
    { id: 10, name: 'Villa Clara' },
    { id: 11, name: 'Cienfuegos' },
    { id: 12, name: 'Matanzas' },
    { id: 13, name: 'Mayabeque' },
    { id: 14, name: 'La Habana' },
    { id: 15, name: 'Pinar del Río' },
  ];

  selectedLocation: string = 'LA HABANA';
  isDropdownOpen: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private router:Router) {}

  ngAfterViewInit() {
    this.populateProvinces();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    const dropdownMenu = this.el.nativeElement.querySelector('#dropdownMenu');
    dropdownMenu.style.display = this.isDropdownOpen ? 'block' : 'none';
    if (this.isDropdownOpen) {
      this.positionDropdown();
    }
  }

  selectLocation(province: string) {
    this.selectedLocation = province.toUpperCase();
    this.isDropdownOpen = false;
    const dropdownMenu = this.el.nativeElement.querySelector('#dropdownMenu');
    dropdownMenu.style.display = 'none';
  }

  populateProvinces() {
    const provinceList = this.el.nativeElement.querySelector('#provinceList');
    provinceList.innerHTML = ''; // Clear existing provinces
    for (let i = 0; i < this.provinces.length; i++) {
      const li = this.renderer.createElement('li');
      const text = this.renderer.createText(this.provinces[i].name);
      this.renderer.appendChild(li, text);
      this.renderer.listen(li, 'click', () => this.selectLocation(this.provinces[i].name));
      this.renderer.appendChild(provinceList, li);
    }
  }

  positionDropdown() {
    const dropdownMenu = this.el.nativeElement.querySelector('#dropdownMenu');
    const locationButton = this.el.nativeElement.querySelector('.location-button');
    const rect = locationButton.getBoundingClientRect();
    this.renderer.setStyle(dropdownMenu, 'top', `${rect.bottom + window.scrollY}px`);
    this.renderer.setStyle(dropdownMenu, 'left', `${rect.left + window.scrollX}px`);
  }
  
}
