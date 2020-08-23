import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styles: [
  ]
})
export class PelisComponent implements OnInit {
  title = 'Peliculas';
  pelis: any[];


  constructor( private router: Router,
               private _ps: PeliculaService ) {

  }

  ngOnInit(): void {
    this._ps.getPopulares()
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
