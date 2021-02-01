import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {

  @Input() personas: any[] = [];
  constructor(private personaService: PersonaService) {
  }
  
  public cabezeras: any[] = ["idpersona", "Nombre Completo", " Telefono ", " Correo "];

  ngOnInit() {

    this.personaService.getPersona().subscribe(res => {
      this.personas = res;
      console.log(this.personas);
    })


  }

}
