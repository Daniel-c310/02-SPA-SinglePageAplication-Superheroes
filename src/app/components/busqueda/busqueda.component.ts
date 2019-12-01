import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroesEn:Heroe[] = [];
  termino:string; //CREAR UNA VARIABLE PARA ALMACENAR EL TERMINO QUE SE ESÁ BUSCANDO EN EL BUSCADOR XD

  constructor( private heroesService:HeroesService,
               private activatedRoute:ActivatedRoute,
               private router:Router) {

  }

  ngOnInit( ) {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params ['parametro']; // GUARDAR EN LA VARIABLE TERMINO  EL PARAMETRO O TERMINO UE SE ESTÁ BUSCANDO
      this.heroesEn = this.heroesService.buscarHeroes( params ['parametro']);
    });

  }

  verHeroe(idx:string){
    this.router.navigate(['heroe',idx]);
    console.log(['heroe',idx]);
  }

}
