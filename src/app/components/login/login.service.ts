import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from './login.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  LoginUser(data: {username: string, password: string}): Observable<ILogin>{
    // Create a new HttpHeaders object
    const headers = new HttpHeaders();

    // Omit the x-xsrf-token header
    headers.append('Accept', 'application/json');

    // Make the POST request to the login endpoint
    return this.http.post<ILogin>("http://127.0.0.1:8000/clientes/login/", data, { headers });
  }

}
