import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliTarjetaComponent } from './components/peli-tarjeta/peli-tarjeta.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { PeliComponent } from './components/peli/peli.component';
import { PelisNinosComponent } from './components/pelis-ninos/pelis-ninos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliTarjetaComponent,
    PelisComponent,
    PeliComponent,
    PelisNinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
