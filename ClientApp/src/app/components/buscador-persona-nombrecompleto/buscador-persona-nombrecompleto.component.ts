import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador-persona-nombrecompleto',
  templateUrl: './buscador-persona-nombrecompleto.component.html',
  styleUrls: ['./buscador-persona-nombrecompleto.component.css']
})
export class BuscadorPersonaNombrecompletoComponent implements OnInit {

  @Output() buscarNombre: EventEmitter<any>;

  constructor() {
    this.buscarNombre = new EventEmitter();
  }

  ngOnInit() {
  }


  public buscarPorNombre(nombreCompleto: string) {

    this.buscarNombre.emit(nombreCompleto)

  }
}
