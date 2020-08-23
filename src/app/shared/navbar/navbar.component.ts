import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  pelisBuscadas: any[];
  constructor( private router: Router,
               public _ps: PeliculaService ) { }

  ngOnInit(): void {
  }

  buscarPelis( texto: string ) {
    // console.log('texto a buscar: ', texto);
    this.router.navigate([ '/search', texto ]);
  }
}
