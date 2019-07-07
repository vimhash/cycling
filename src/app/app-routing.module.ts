import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { SlidesComponent } from './slides/slides.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SlidesComponent},
  { path: 'contact', component: FormularioReactivoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
