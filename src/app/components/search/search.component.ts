import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  title = 'Peliculas buscadas: ';
  pelis: any[];
  texto: string;
  pelisBuscadas: any[];

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _ps: PeliculaService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params[ 'id' ];
      this.title += this.texto;
    });
    this._ps.buscarPelicula( this.texto )
            .subscribe( data => {
              this.pelisBuscadas = data;
              console.log('Peli buscada: ', this.pelisBuscadas );
            });
  }

  verPeliBuscada( idx: number ) {
    // console.log( this.index );
    this.router.navigate( ['/search', idx] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
