
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.inteface';


@Injectable({
  providedIn: 'root' //globaliza el servicio
})
export class GifsService {

  private apiKey: string = 'uRNrjlimHrGSYXyYm1beDjUFWXO6L35z';
  private servicioUrl = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  //TODO: Cambiar any por su data type
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) { 
    const historial = localStorage.getItem('historial');
    if(historial){
      this._historial = JSON.parse(historial);
    }

    const resultados = localStorage.getItem('resultados');
    if(resultados){
      this.resultados = JSON.parse(resultados);
    }
   }

  get historial(): string[] {
    return [...this._historial]; //Para mantener el principio de encapsulamiento
  }

  buscarGifs(termino: string) {
    termino = termino.toLocaleLowerCase();
    if(termino.trim().length === 0){
      return;
    }
    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    } 
    console.log(this._historial);

    const params = new HttpParams().set('api_key', this.apiKey).set('q', termino).set('limit', '10');
    console.log(params.toString());
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe((resp) => {
      this.resultados = resp.data;
      console.log(this.resultados);
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    }) 
    
/*     const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=uRNrjlimHrGSYXyYm1beDjUFWXO6L35z&q=${termino}&limit=10`)
    const data = await response.json();
    console.log(data); */


  }
  
}
