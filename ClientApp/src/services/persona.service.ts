import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlBase: string

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;
  }

  public getPersona() {
    return this.http.get(this.urlBase + "api/listar-personas").pipe(map((res: any[]) => {
      return res;
    }));
  }

  public getPersonaFiltro(nombreCompleto: string) {
    return this.http.get(this.urlBase + "api/persona/filtrarPersona/" + nombreCompleto).pipe(map((res: any[]) => {
      return res;
    }));
  }
}
