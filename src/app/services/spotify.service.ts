import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {}

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA-qIVav_5mHYJTR5vsj4scXvLI7jSLKrzYnzZ-XVoOYH5wtiZQ3wihGMulAlnmCezFQVXuQBiUXRIDAEk'
    });

    return this.http.get(url, { headers });

  }

  getNewRelases() {

    return this.getQuery('browse/new-releases')
    .pipe( map( data =>  data['albums'].items ));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5`)
      .pipe( map(data => data['artists'].items ));
  }

  getArtista( termino: string ) {

    return this.getQuery(`artists/${termino}`);

  }
  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data => data['tracks']));

  }



}
