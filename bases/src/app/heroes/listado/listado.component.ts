import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesEliminados:string = '';


  borrarHeroe():void{
    this.heroesEliminados = this.heroes.shift() || '';
    //this.heroesEliminados.push(heroeEliminado);
    //this.heroes = [];
  }
}
