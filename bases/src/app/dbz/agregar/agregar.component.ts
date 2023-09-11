import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  //@Input('data') personajes:Personaje[] = [];
  @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();
  @Input()nuevo:Personaje = {
    nombre:'',
    poder: 0
  }

  agregar():void{
    //two databinding emite y recibe propiedades
    if(this.nuevo.nombre.trim().length ===0){
      return;
    }
    
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    //this.personajes.push(this.nuevo);
    this.nuevo = {nombre:'',poder:0};
    //this.nuevo.nombre=''
    //this.nuevo.poder=0

  }
}
