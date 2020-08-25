import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  buscar = '';
  busqueda = '';
  regresarA = 'buscar';
  peliculas: any[];
  constructor( private activatedRoute: ActivatedRoute,
               public _ps: PeliculaService,
               private router: Router ) {
    this.activatedRoute.params.subscribe( params => {
      this.buscar = params[ 'texto' ];
      this.busqueda = params[ 'busqueda' ];
      if ( this.buscar == null || this.buscar.length == 0 ) {
        this.buscar = this.busqueda;
      }
      // console.log('busqueda: ', this.busqueda);
    });
  }

  ngOnInit(): void {
    this.buscarPelicula();
  }

  buscarPelicula() {
    // console.log(this.buscar);
    if ( this.buscar == null || this.buscar.length == 0 ) {
      return;
    }
    this._ps.buscarPelicula( this.buscar )
            .subscribe( data => this.peliculas = data);
  }

  verPeli( idx: number, pag: string ) {
    // console.log( idx );
    this.router.navigate( ['/peli', idx, pag, this.buscar] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
