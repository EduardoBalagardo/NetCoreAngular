import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador-producto',
  templateUrl: './buscador-producto.component.html',
  styleUrls: ['./buscador-producto.component.css']
})
export class BuscadorProductoComponent implements OnInit {

  @Output() buscarButton: EventEmitter<any>;
  @Output() limpiarButton: EventEmitter<any>;

  constructor() {
    this.buscarButton = new EventEmitter();
    this.limpiarButton = new EventEmitter();
  }

  ngOnInit() {
  }

  public filtrar(nombre) {
    this.buscarButton.emit(nombre);
  }

  public limpiar(nombre) {
    this.limpiarButton.emit(nombre);
  }


}
