import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Asegurarse que el objeto no es null

  constructor(private gifsService: GifsService) { }

  buscar(){
    let value = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value = '';

    

  }
}
