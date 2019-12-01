import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service'; //IMPORTACION DE HEROES SERVICIOS DE LA CARPETA SERVICIOS/HEROES
import { Router } from '@angular/router'; //BOTON: Importamos libreria router para poder cambiarnos de rutas e implementar el sistema de rutas

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = []; //creo una variable donde van a estar todo el arregalo de los heroes, esta variable se va aUTILIZAR EN EL HTML CON EL ngFor y tiene toda TODA la infor de los heroes

  constructor( private _heroesService:HeroesService, // aqui llamo a la data de los heroes, private _heroesService:HeroesService uso esto para llamar a mi servicio, osea el que esta en la carpeta servicios/heroes. La paabra private es para que se acceda solo dentro de ete servicio
               private router:Router) { // BOTON: como se importo el servicio Router, se crea una variable de ese tipo de servicio en el constructor

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); //LA VARIABLE "heroes" me sirve para mostrar los atributos de cada heroe, como el nombre, fecha etc, en la pagina html (no es la busueda de uno, sino lo que se muestra todo) que se muestra igualo el arreglo creado al arreglo que se eimporto con todo el arreglo de heroes, ver que llamo al metodo get que se creo en Servicios/heroes.service
    // console.log(this.heroes);

  }

// BOTON: Linea de abajo. se crea una funcion que reciba el index del heroe
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
    console.log(idx);
  }
}
