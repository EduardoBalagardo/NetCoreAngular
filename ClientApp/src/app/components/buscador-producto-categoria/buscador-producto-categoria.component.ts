import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
@Component({
  selector: 'app-buscador-producto-categoria',
  templateUrl: './buscador-producto-categoria.component.html',
  styleUrls: ['./buscador-producto-categoria.component.css']
})
export class BuscadorProductoCategoriaComponent implements OnInit {

  @Output() buttonBuscar: EventEmitter<any>;
  @Output() buttonLimpiar: EventEmitter<any>;

  public categorias: any[] = [];
  constructor(private catService: CategoriaService) {
    this.buttonBuscar = new EventEmitter();
    this.buttonLimpiar = new EventEmitter();
  }

  ngOnInit() {
    this.catService.getCategoria().subscribe(res => {
      this.categorias = res;      
    })
  }

  public buscar(categoria) {
    this.buttonBuscar.emit(categoria);
  }

  public limpiar(categoria) {
    this.buttonLimpiar.emit(categoria);
  }

}
