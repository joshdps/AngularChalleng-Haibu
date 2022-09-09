import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Recursos propios
import { Trabajador } from '../interfaces/trabajador.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  // Declaración de variables
  baseUrl: string = environment.baseUrl;
  endpointTrabajadores: string = environment.endpointTrabajadores;
  endpointUsuarios: string = environment.endpointUsuarios;
  requestUrl: string = ''


  constructor( private http: HttpClient // Inyección de servicio http module
  ) { }

  // http requet para obtener listado de trabajadores
  getTrabajadores():Observable<Trabajador[]> {
    this.requestUrl = `${environment.baseUrl}${this.endpointTrabajadores}`
   return this.http.get<Trabajador[]>(this.requestUrl)
  }

  // http requet para obtener listado de trabajadores por el nombre
  getTrabajadoresPorNombre( keyword: string = '' ):Observable<Trabajador[]> {
    this.requestUrl = `${this.baseUrl}${this.endpointTrabajadores}?q=${keyword}&_limit=10`
   return this.http.get<Trabajador[]>(this.requestUrl)
  }

    // http requet para obtener listado de trabajadores por el id
   getTrabajadorPorId(id: string):Observable<Trabajador> {
    this.requestUrl = `${this.baseUrl}${this.endpointTrabajadores}`
    return  this.http.get<Trabajador>(`${this.requestUrl}/${id}`)
   }
 

  // Metodo para validar el RUT
  validaRut = ( rutCompleto: string ) =>{
      if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
          return false;
      var tmp = rutCompleto.split('-');
      var digv = tmp[1];
      var rut = +tmp[0];
      if (digv == 'K') digv = 'k';
      return (this.getDV(rut) == digv);
  }

  // Metodo para validar el DV a partir del RUT
  getDV = (T: number) => {
      var M = 0,
          S = 1;
      for (; T; T = Math.floor(T / 10))
          S = (S + T % 10 * (9 - M++ % 6)) % 11;
      return S ? S - 1 : 'k';
  }



}
