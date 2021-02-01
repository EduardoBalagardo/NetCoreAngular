import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { ProductoServiceService } from '../../../services/producto-service.service';

@Component({
  selector: 'app-filtrado-producto-categoria',
  templateUrl: './filtrado-producto-categoria.component.html',
  styleUrls: ['./filtrado-producto-categoria.component.css']
})
export class FiltradoProductoCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private productoService: ProductoServiceService) { }

  ngOnInit() {
  }

  public productos: any[] = [];

  public buscar(categoria) {
    if (categoria.value == "") {
      this.productoService.getProduct().subscribe(res => {
        this.productos = res;
      });
    } else {
      this.productoService.getProductoCategoria(categoria.value).subscribe(res => {
        this.productos = res;
        console.log(this.productos);
      })
    }
  }

  public limpiar(categoria) {
    categoria.value = "";
    this.productoService.getProduct().subscribe(res => {
      this.productos = res;
      console.log(this.productos);

    });
    
  }

}
