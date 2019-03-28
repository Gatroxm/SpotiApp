import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  parametro: string;
  result: any = {};
  loading: boolean;
  TopTracks: any[] = [];
  error: boolean;
  mensajeErrores: string;
  tituloErrores: string;
  id: string;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( parametro => {
      this.id = parametro.id;
      this.getArtista( this.id );
      this.getTopTracks( this.id );
    });
  }

  getArtista( id: string ) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe( data => {
      this.result = data;
      // console.log(this.result);
      this.loading = false;
    }, (errorServicio: any) => {
      this.error = true;
      this.loading = false;
      this.mensajeErrores = errorServicio.error.error.message;
      this.tituloErrores = errorServicio.error.error.status;
    });

  }

  regresar() {
    window.history.back();
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id).subscribe(
      (data: any) => {
        this.TopTracks = data;
        console.log(this.TopTracks);
      }, (errorServicio: any) => {
        this.error = true;
        this.loading = false;
        this.mensajeErrores = errorServicio.error.error.message;
        this.tituloErrores = errorServicio.error.error.status;
      });
  }

}
