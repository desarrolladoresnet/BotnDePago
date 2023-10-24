import { HttpXsrfTokenExtractor } from '@angular/common/http';

export class MiHttpXsrfTokenExtractor implements HttpXsrfTokenExtractor {
  getToken(): string | null {
    // Extraer el token XSRF de la cookie de sesión.
    const token = localStorage.getItem('XSRF-TOKEN');
    if (token) {
      return token;
    } else {
      return null;
    }
  }
}