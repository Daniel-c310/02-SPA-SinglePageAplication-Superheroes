import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private heroesService:HeroesService ) {}

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    let busqueda = this.heroesService.buscarHeroes(termino);
    console.log( busqueda );
  }



}
