import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelis-ninos',
  templateUrl: './pelis-ninos.component.html',
  styles: [
  ]
})
export class PelisNinosComponent implements OnInit {

  title = 'Peliculas para niños';
  pelis: any[];


  constructor( private router: Router,
               private _ps: PeliculaService ) {

  }

  ngOnInit(): void {
    this._ps.getPopularesNiños()
            .subscribe( data => {
              this.pelis = data;
              console.log( 'pelis: ', this.pelis );
            });
  }

  verPeli( idx: number ) {
    // console.log( this.index );
    this.router.navigate( ['/search', idx] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
