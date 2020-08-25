import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliTarjetaComponent } from './components/peli-tarjeta/peli-tarjeta.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { PeliComponent } from './components/peli/peli.component';
import { PelisNinosComponent } from './components/pelis-ninos/pelis-ninos.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliTarjetaComponent,
    PelisComponent,
    PeliComponent,
    PelisNinosComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
