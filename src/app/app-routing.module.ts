import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { PeliComponent } from './components/peli/peli.component';
import { PelisNinosComponent } from './components/pelis-ninos/pelis-ninos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelis', component: PelisComponent },
  { path: 'pelisNiños', component: PelisNinosComponent },
  { path: 'peli/:id', component: PeliComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
