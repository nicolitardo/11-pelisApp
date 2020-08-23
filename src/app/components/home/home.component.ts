import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  pelis: any[];

  constructor( private router: Router,
               private _ps: PeliculaService ) {
   }

  ngOnInit(): void {
    this._ps.getCartelera()
            .subscribe( data => {
              this.pelis = data;
              // console.log( 'cartelera: ', this.pelis );
            });
  }

  verPeli( idx: number ) {
    // console.log( this.index );
    this.router.navigate( ['/search', idx] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
