import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
@Component({
  selector: 'app-filtrado-persona-nombrecompleto',
  templateUrl: './filtrado-persona-nombrecompleto.component.html',
  styleUrls: ['./filtrado-persona-nombrecompleto.component.css']
})
export class FiltradoPersonaNombrecompletoComponent implements OnInit {

  public personas:any[]=[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }

  public buscarNombreCompletoFP(nombreCompleto) {

    this.personaService.getPersonaFiltro(nombreCompleto.value).subscribe(res => {
      this.personas = res;
      console.log(this.personas);
    })

  }

}
