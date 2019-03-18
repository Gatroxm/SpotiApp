import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  /* Variables */
  
  Nuevascanciones: any[] = [];

  loading:Boolean;
  error:Boolean;
  mensajeErrores: String;
  tituloErrores: String;
  constructor( private spotify:SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewRelases().subscribe( (data: any) => {
      this.Nuevascanciones = data;
      this.loading = false;
    }, (errorServicio: any) =>{
      this.error = true;
      this.loading = false;
      this.mensajeErrores = errorServicio.error.error.message;
      this.tituloErrores = errorServicio.error.error.status;
    });
  }

}
