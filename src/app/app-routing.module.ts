import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { PeliComponent } from './components/peli/peli.component';
import { PelisNinosComponent } from './components/pelis-ninos/pelis-ninos.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelis', component: PelisComponent },
  { path: 'pelisNiños', component: PelisNinosComponent },
  { path: 'peli/:id', component: PeliComponent },
  { path: 'peli/:id/:pag', component: PeliComponent },
  { path: 'buscar/:texto/:pag', component: BuscarComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
