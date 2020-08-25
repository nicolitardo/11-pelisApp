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
  regresarA = '';

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _ps: PeliculaService ) {

    this.activatedRoute.params.subscribe( params => {
      this.texto = params[ 'id' ];
      this.regresarA = params[ 'pag'];
      // console.log( 'id: ', this.texto );
      // console.log( 'debe regresar a: ', this.regresarA );
    });
    this._ps.buscarPeliculaById( this.texto )
            .subscribe( data => {
              this.peli = data;
              // console.log('Peli seleccionada: ', this.peli );
            });

  }

  ngOnInit(): void {}

}
