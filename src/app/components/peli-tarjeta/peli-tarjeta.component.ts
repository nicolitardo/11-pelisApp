import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peli-tarjeta',
  templateUrl: './peli-tarjeta.component.html',
  styles: [
  ]
})
export class PeliTarjetaComponent implements OnInit {

  @Input() peli: any = {};
  @Input() index: number;
  @Input( 'regresarA') regresarA;
  @Output() peliSeleccionado: EventEmitter<number>;
  public urlImageMoviedb = 'http://image.tmdb.org/t/p/w300';

  constructor( private router: Router ) {
    this.peliSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verPeli( id: number, pag: string ) {
    // console.log({ pag });
    this.router.navigate( ['/peli', id, pag] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
