import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // Aquí puedes implementar la lógica para verificar si el usuario está autenticado
    // Por ejemplo, verificar si hay un token de sesión válido en el almacenamiento local
    //const token = localStorage.getItem('token');
    return true // Devuelve true si hay un token, false en caso contrario
  }
}
