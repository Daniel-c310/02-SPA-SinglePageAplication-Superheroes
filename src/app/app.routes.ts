import { RouterModule, Routes } from '@angular/router'; //usar sniped ng2-routes para desplegar codigo routers
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component'; //A: quiza tambien "B" creacion de nueva ruta para mostrar mas info del heroe

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent }, //estas son las rutas
  { path: 'about', component: AboutComponent }, //estas son las rutas
  { path: 'heroes', component: HeroesComponent }, //estas son las rutas
  { path: 'heroe/:id', component: HeroeComponent }, //estas son las rutas AUI SE LE PASA EL ID DEL HEROE QUE QUIERO MOSTRAR
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //A: quiza tambien "B" ESTE ES DONDE SE DIRECCIONA LA RUTA SI NO HAY UNA ESPECIFICA PERO SE LE DEBE DAR UNA
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
