import { Component, OnInit, Input } from '@angular/core';
import { ProductoServiceService } from '../../../services/producto-service.service';

@Component({
  selector: 'app-tabla-product',
  templateUrl: './tabla-product.component.html',
  styleUrls: ['./tabla-product.component.css']
})
export class TablaProductComponent implements OnInit {

  @Input() productos: any[] = [];

  public cabezeras:string[] = ["idProducto", "Nombre" , "Precio", "Stock", "Categoria"]
  constructor(public service: ProductoServiceService) { }

  ngOnInit() {
    this.service.getProduct().subscribe(res => {
      this.productos = res;    
    })

  }

}
