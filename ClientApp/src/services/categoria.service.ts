import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase: string

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;
  }


  public getCategoria() {
    return this.http.get(this.urlBase + "api/get-categoria").pipe( map( ( res:any[] ) => {
      return res;
    }));
  }
}
