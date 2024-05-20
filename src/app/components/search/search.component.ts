import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output()
  onNombreCarta: EventEmitter<string> = new EventEmitter<string>();

  nombreCarta = "";

  emitirNombreCarta(): void {
    if(this.nombreCarta === ''){
      console.log("No puedes mandar una cadena vacia");
    }else{
      this.onNombreCarta.emit(this.nombreCarta);
    }
  }

}
