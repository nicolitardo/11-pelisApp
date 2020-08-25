import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  ninos: any;
  public urlImageMoviedb = 'http://image.tmdb.org/t/p/w500';
  constructor( private router: Router,
               private _ps: PeliculaService ) {
    this._ps.getCartelera()
          .subscribe( data => {
            this.cartelera = data;
            // console.log( 'cartelera: ', this.cartelera );
          });

    this._ps.getPopulares()
          .subscribe( data => {
            this.populares = data;
            // console.log( 'populares: ', this.populares );
          });

    this._ps.getPopularesNiños()
          .subscribe( data => {
            this.ninos = data;
            // console.log( 'ninos: ', this.ninos );
          });
   }

  ngOnInit(): void { }

  verPeli( idx: number ) {
    // console.log( this.index );
    this.router.navigate( ['/search', idx] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
