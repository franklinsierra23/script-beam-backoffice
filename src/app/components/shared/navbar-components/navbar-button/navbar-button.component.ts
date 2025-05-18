import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-button',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-button.component.html',
  styleUrl: './navbar-button.component.css'
})
export class NavbarButtonComponent {
  @Input() text: string = ''; // Texto del botón
  @Input() url: string = '#'; // URL del botón
  @Input() isActive: boolean = false; // Estado activo
}
