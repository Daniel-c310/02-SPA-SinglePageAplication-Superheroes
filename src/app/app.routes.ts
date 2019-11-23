import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent }, //estas son las rutas
  { path: 'about', component: AboutComponent }, //estas son las rutas
  { path: 'heroes', component: HeroesComponent }, //estas son las rutas
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //ESTE ES DONDE SE DIRECCIONA LA RUTA SI NO HAY UNA ESPECIFICA PERO SE LE DEBE DAR UNA
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
