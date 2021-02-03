import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../../services/usuario-service.service';

@Component({
  selector: 'app-filtrado-usuario',
  templateUrl: './filtrado-usuario.component.html',
  styleUrls: ['./filtrado-usuario.component.css']
})
export class FiltradoUsuarioComponent implements OnInit {

  usuarios: any[] = [];
  constructor(private usuarioService: UsuarioServiceService) {
  }

  ngOnInit() {
  }

  public filtrar(tipoUsuario) {        
    if (tipoUsuario.value == "") {
      this.usuarioService.getUsuarios().subscribe(res => {
        this.usuarios = res;
      });
    } else {
      this.usuarioService.getFiltrarUsuarioTipo(tipoUsuario.value).subscribe(res => {
        this.usuarios = res;
      });
    }    
  }
}
