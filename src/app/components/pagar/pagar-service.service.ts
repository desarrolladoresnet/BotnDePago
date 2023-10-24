import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagoMovil } from './pagoMovil.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagarServiceService {

  constructor(private http: HttpClient) { } 

  SendPayment(data: IPagoMovil): Observable<IPagoMovil>{
    return this.http.post<IPagoMovil>("http://127.0.0.1:8000/pagomovil/pagomovil/", data, { withCredentials: true });
  }
}
