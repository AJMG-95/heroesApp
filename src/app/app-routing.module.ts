import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    // lazy load de lasrutas del modulo authmodule
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    // lazy load de lasrutas del modulo heroesmodule
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
  },
  // path al componente de error404
  {
    path: '404',
    component: Error404PageComponent,
  },
  // path por defecto, redirige a heroes
  {
    path: '',
    redirectTo: 'heroes',
    // Para garantizar que la redireecion solo se produce cuando el path es exactamente el indicado
    pathMatch: 'full'
  },
  // Cualquier otro path redirige a la ruta/componente error404
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
