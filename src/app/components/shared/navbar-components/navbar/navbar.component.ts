import { Component } from '@angular/core';
import { NavbarButtonComponent } from "../navbar-button/navbar-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NavbarButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 currentUrl: string = '';
 constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url; // Obtiene la URL actual
  }
}
