import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Hacemos una importacion para poder tomar el numero del index que se muestra en el url /home/heroe/0 para usarlo para mostrar el contenido de cada heroe
import { HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  constructor( private activatedRoute:ActivatedRoute, //creamos la variable del Route importado
               private _heroesService:HeroesService) { //Creamos la variable del servicio importado

    this.activatedRoute.params.subscribe( params => { //es para regresar un observadorque va a ser el id desde el url
      //console.log( params["id"] ); //imprime el id pero trasformado en numero y ese id es el que especificamos en el archivo de rutas "app.routes.ts"
      this.heroe = this._heroesService.getHeroe( params["id"] ); //igualamos la variable heroe a un heroe que vamos a llamar con el metodo que creamos "grtHeroe"
    });

   }

   ngOnInit() {

   }

}
