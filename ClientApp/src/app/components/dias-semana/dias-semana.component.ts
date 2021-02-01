import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias-semana',
  templateUrl: './dias-semana.component.html',
  styleUrls: ['./dias-semana.component.css']
})
export class DiasSemanaComponent implements OnInit {

  constructor() { }

  public dias:any = ['Lunes', 'Martes', 'Mieroles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  ngOnInit() {
    console.log(this.dias);
  }

}
