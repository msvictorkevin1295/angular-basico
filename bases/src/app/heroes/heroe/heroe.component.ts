import {Component} from '@angular/core'

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number= 45;
    //one way data binding

get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        console.log('Hey...');
        this.edad = 30;
    }
}