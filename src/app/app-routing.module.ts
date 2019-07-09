import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { SlidesComponent } from './slides/slides.component';
import { FormularioDinamicoComponent } from './formulario-dinamico/formulario-dinamico.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SlidesComponent},
  { path: 'contact', component: FormularioReactivoComponent},
  { path: 'dinamico', component: FormularioDinamicoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
