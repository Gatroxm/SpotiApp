import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artistas: any[] = [];
  loading:Boolean = false;

  error:Boolean;
  mensajeErrores: String;
  tituloErrores: String;
  constructor( private spotify:SpotifyService ) { }
  buscar( termino:String ){
    this.loading = true;
    this.spotify.getArtistas( termino ).subscribe( (data: any) =>{
      this.artistas = data;
      this.loading = false;
    },(errorServicio: any) =>{
      this.error = true;
      this.loading = false;
      this.mensajeErrores = errorServicio.error.error.message;
      this.tituloErrores = errorServicio.error.error.status;
      console.log("hoal")
    })
  }
}
