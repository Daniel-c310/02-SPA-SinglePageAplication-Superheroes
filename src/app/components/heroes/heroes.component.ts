import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service'; //IMPORTACION DE HEROES SERVICIOS DE LA CARPETA SERVICIOS/HEROES

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:any[] = []; //creo una variable donde van a estar todo el arregalo de los heroes

  constructor( private _heroesService:HeroesService) { // aqui llamo a la data de los heroes, private _heroesService:HeroesService uso esto para llamar a mi servicio, osea el que esta en la carpeta servicios/heroes. La paabra private es para que se acceda solo dentro de ete servicio

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); //igualo el arreglo creado al arreglo que se eimporto con todo el arreglo de heroes, ver que llamo al metodo get que se creo en Servicios/heroes.service
    console.log(this.heroes);
  }

}
