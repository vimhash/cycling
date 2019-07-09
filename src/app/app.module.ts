import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './slides/slides.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioDinamicoComponent } from './formulario-dinamico/formulario-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidesComponent,
    FormularioReactivoComponent,
    FormularioDinamicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
