import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RespuestaBusqueda } from './models/respuesta-busqueda.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient){}

  nombreCartaRecibida: string = ''
  //Donde se van a almacenar las cartas
  respuestaCartas!: RespuestaBusqueda;

  recibirNombreCarta(nombreCarta: string): void {
    this.nombreCartaRecibida = nombreCarta;
    console.log("Nombre de la carta recibida es: " + this.nombreCartaRecibida)
    //Buscar la carta en la api
    this.buscarCartaApi()
    
  }
  buscarCartaApi(): void {
    this.http.get<RespuestaBusqueda>("https://api.scryfall.com/cards/search?q=" + this.nombreCartaRecibida)
      .subscribe(
        resultado => {
          this.respuestaCartas = resultado;
          console.log(this.respuestaCartas)
        }
      );
  }
}
