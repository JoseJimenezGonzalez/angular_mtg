import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RespuestaBusqueda } from '../../models/respuesta-busqueda.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input()
  respuestaCartasDePadre!: RespuestaBusqueda;

}