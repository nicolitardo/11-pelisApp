import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apikey = '20f52e64307e08817f02e9c9d3f28b32';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    let mesDesde: string;
    let mesHasta: string;
    mesDesde = (desde.getMonth() + 1).toString();
    if ( mesDesde.toString().length == 1) {
      mesDesde = '0' + mesDesde;
    }
    mesHasta = (hasta.getMonth() + 1).toString();
    if ( mesHasta.toString().length == 1) {
      mesHasta = 0 + mesHasta;
    }
    let desdeStr = `${ desde.getFullYear() }-${ mesDesde }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ mesHasta }-${ hasta.getDate() }`;
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => {
                    //  console.log(res.results);
                     return res.results;
                    }));
  }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => {
                    //  console.log(res.results);
                     return res.results;
                    }));
  }

  getPopularesNiños() {
    const url = `${ this.urlMoviedb }/discover/movie?with_genres=16&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => {
                    //  console.log(res.results);
                     return res.results;
                    }));
  }


  buscarPelicula( texto: string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
                .pipe(map( (res: any) => {
                  // console.log('pelis buscadas: ', res);
                  return res.results;
                }));
  }

  buscarPeliculaById( texto: string ){

    let url = `${ this.urlMoviedb }/movie/${ texto }?api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
                .pipe(map( (res: any) => {
                  // console.log('pelis buscada: ', res);
                  return res;
                }));
  }
}
