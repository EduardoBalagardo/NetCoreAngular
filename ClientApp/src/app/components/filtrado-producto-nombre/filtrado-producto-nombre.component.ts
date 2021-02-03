import { Component, OnInit, } from '@angular/core';
import { ProductoServiceService  } from '../../../services/producto-service.service';

@Component({
  selector: 'app-filtrado-producto-nombre',
  templateUrl: './filtrado-producto-nombre.component.html',
  styleUrls: ['./filtrado-producto-nombre.component.css']
})
export class FiltradoProductoNombreComponent implements OnInit {

  

  constructor( public service: ProductoServiceService) {
       
  }

  
  ngOnInit() {
  }

  public productos: any;

  public filtrarDatos(nombre) {    
    if (nombre.value == "") {
      this.service.getProduct().subscribe(res => {
        this.productos = res;        
      });
    }else {
      this.service.getFiltroProducto(nombre).subscribe(res => {
        this.productos = res;        
      });
    }
  }

  public limpiar(nombre) {
    nombre.value = "";
    this.service.getProduct().subscribe(res => {
      this.productos = res;
      console.log(this.productos);
    });
  }

 }
