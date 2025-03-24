import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing-page/landing-page.component').then(lp => lp.LandingPageComponent)
  },
  {
    path: 'generos',
    loadComponent: () => import('./generos/indice-generos/indice-generos.component').then(ig => ig.IndiceGenerosComponent)
  },
  {
    path: 'generos/crear',
    loadComponent: () => import('./generos/crear-generos/crear-generos.component').then(cg => cg.CrearGenerosComponent)
  },
  {
    path: 'generos/editar/:id',
    loadComponent: () => import('./generos/editar-genero/editar-genero.component').then(eg => eg.EditarGeneroComponent)
  },
  {
    path: 'actores',
    loadComponent: () => import('./actores/indice-actores/indice-actores.component').then(a => a.IndiceActoresComponent)
  },
  {
    path: 'actores/crear',
    loadComponent: () => import('./actores/crear-actor/crear-actor.component').then(ca => ca.CrearActorComponent)
  },
  {
    path: 'actores/editar/:id',
    loadComponent: () => import('./actores/editar-actor/editar-actor.component').then(ea => ea.EditarActorComponent)
  },
  {
    path: 'cines',
    loadComponent: () => import('./cines/indice-cine/indice-cine.component').then(c => c.IndiceCineComponent)
  },
  {
    path: 'cines/crear',
    loadComponent: () => import('./cines/crear-cine/crear-cine.component').then(cc => cc.CrearCineComponent)
  },
  {
    path: 'cines/editar/:id',
    loadComponent: () => import('./cines/editar-cine/editar-cine.component').then(ec => ec.EditarCineComponent)
  },
  {
    path: 'peliculas/crear',
    loadComponent: () => import('./peliculas/crear-pelicula/crear-pelicula.component').then(cp => cp.CrearPeliculaComponent)
  },
  {
    path: 'peliculas/editar/:id',
    loadComponent: () => import('./peliculas/editar-pelicula/editar-pelicula.component').then(ep => ep.EditarPeliculaComponent)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
