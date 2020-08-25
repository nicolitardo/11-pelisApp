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
  regresarA = 'pelisNiños';

  constructor( private router: Router,
               private _ps: PeliculaService ) {

  }

  ngOnInit(): void {
    this._ps.getPopularesNiños()
            .subscribe( data => {
              this.pelis = data;
              // console.log( 'pelis niños: ', this.pelis );
            });
  }

  verPeli( idx: number, pag: string ) {
    // console.log({ pag });
    this.router.navigate( ['/search', idx, pag] );
    // this.heroeSeleccionado.emit( this.index );
  }
}
