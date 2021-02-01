import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  public urlBase: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;
    //this.urlBase = "http://localhost:44324/";

  }


  public getProduct() {
    return this.http.get(this.urlBase + 'api/producto/listar-productos').pipe(
      map((res: any[]) => {
        return res;
      })
    )
  }

  public getFiltroProducto(nombre: string) {
    return this.http.get(this.urlBase + 'api/producto/listar-productos-nombre/' + nombre).pipe(
      map((res: any[]) => {
        return res;
      })
    );
  }

  public getProductoCategoria(idCategoria: number) {
    return this.http.get(this.urlBase + 'api/producto/listar-categoria-producto/' + idCategoria).pipe(
      map((res: any[]) => {
        return res;
      })
    );
  }
}
