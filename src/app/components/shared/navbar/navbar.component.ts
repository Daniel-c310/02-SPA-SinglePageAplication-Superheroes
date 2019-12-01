import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) {}

  ngOnInit() {

  }
//PARA BUSCAR UN HEROE, ESTO ES PARA COMPROBAR SI FUNIONA (DE PREFERENCIA NO QUITAR EL COMENTADO)
  // buscarHeroe( termino:string ){
  //   let busqueda = this.heroesService.buscarHeroes(termino);
  //   console.log( busqueda );
  //   return busqueda;
  // }

  verHeroe(parametro:string){
    this.router.navigate(['busqueda',parametro]);
    console.log(['busqueda',parametro]);
  }

}
