import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioServiceService {


  public urlBase:string = "";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;    
  }


  public getUsuarios() {
    return this.http.get(this.urlBase + "api/usuarios/listar-usuarios").pipe(
      map((res: any[]) => {
        return res;
      })
    )
  }

  public getUsuariosTipo() {
    return this.http.get(this.urlBase + 'api/usuarios/lista-usuarios-tipo').pipe(
      map((res: any[]) => {
        return res;
      })
    )
  }

  public getFiltrarUsuarioTipo(idTipo: number) {
    return this.http.get(this.urlBase + "api/usuario/filtrar-usuario-tipo/" + idTipo).pipe(
      map((res: any[]) => {
        return res;
    }))
  }

}
