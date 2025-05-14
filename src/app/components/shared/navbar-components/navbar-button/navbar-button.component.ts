import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  imports: [],
  templateUrl: './navbar-button.component.html',
  styleUrl: './navbar-button.component.css'
})
export class NavbarButtonComponent {
  @Input() text: string = ''; // Texto del botón
  @Input() url: string = '#'; // URL del botón
  @Input() isActive: boolean = false; // Estado activo
}
