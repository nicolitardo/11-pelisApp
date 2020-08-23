import { Component } from '@angular/core';
import { PeliculaService } from './services/pelicula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pelisApp';
  pelis: any[];

  constructor( private _ps: PeliculaService ) {

    this._ps.getPopulares()
            .subscribe( data => {
              this.pelis = data;
              console.log( 'pelis: ', this.pelis );
            });
  }

}
