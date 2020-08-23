import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styles: [
  ]
})
export class PeliComponent implements OnInit {

  title = 'Peliculas seleccionada:';
  public urlImageMoviedb = 'http://image.tmdb.org/t/p/w300';
  pelis: any[];
  texto: string;
  peli: any = '';

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _ps: PeliculaService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params[ 'id' ];
    });
    this._ps.buscarPeliculaById( this.texto )
            .subscribe( data => {
              this.peli = data;
              // console.log('Peli seleccionada: ', this.peli );
            });
  }

}
