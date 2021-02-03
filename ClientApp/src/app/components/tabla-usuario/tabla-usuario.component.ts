import { Component, OnInit, Input } from '@angular/core';
import { UsuarioServiceService } from '../../../services/usuario-service.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {

  @Input() usuarios: any[] = [];

  cabeceras: string[] = ["IdUsuario", "Nombre usuario", "Nombre completo persona", "Nombre tipo usuario" ]
  constructor(private userService: UsuarioServiceService) {
  }


  ngOnInit() {
    this.userService.getUsuarios().subscribe(res => {
      this.usuarios = res;      
    });
  }

}
