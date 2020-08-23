import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peli-tarjeta',
  templateUrl: './peli-tarjeta.component.html',
  styles: [
  ]
})
export class PeliTarjetaComponent implements OnInit {

  @Input() peli: any = {};
  @Input() index: number;
  @Output() peliSeleccionado: EventEmitter<number>;
  public urlImageMoviedb = 'http://image.tmdb.org/t/p/w300';

  constructor( private router: Router ) {
    this.peliSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verPeli( id: number ) {
    // console.log( this.index );
    this.router.navigate( ['/peli', id] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
