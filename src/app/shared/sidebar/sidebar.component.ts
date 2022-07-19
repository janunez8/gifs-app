import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interfaces/gifs.inteface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  constructor(private gifsService: GifsService) { }
  get historial(): string[] {
    return this.gifsService.historial;
  }

  buscar(item:string){
      this.gifsService.buscarGifs(item);
  }

}
