import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioServiceService } from '../../../services/usuario-service.service';


@Component({
  selector: 'app-buscador-tipo-usuario',
  templateUrl: './buscador-tipo-usuario.component.html',
  styleUrls: ['./buscador-tipo-usuario.component.css']
})
export class BuscadorTipoUsuarioComponent implements OnInit {
  
  @Output() clickTipoUsuario: EventEmitter<any>;
  public tipoUsuarios: any[] = [];

  constructor(private usuarioService: UsuarioServiceService) {
    this.clickTipoUsuario = new EventEmitter();
  }    
  ngOnInit() {
    this.usuarioService.getUsuariosTipo().subscribe(res => {
      this.tipoUsuarios = res;      
    })
  }

  public filtrarUsuario(tipo) {
    this.clickTipoUsuario.emit(tipo);    
  }
  
}
