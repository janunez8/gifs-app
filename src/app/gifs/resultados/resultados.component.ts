import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.inteface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(private gifService: GifsService) { }

  get resultados(): Gif[] {
    return this.gifService.resultados;
  }
}
