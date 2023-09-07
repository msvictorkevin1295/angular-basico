import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Contador App';
  numero:number = 10;
  base: number = 5;

  sumar():void{
    this.numero = this.numero+1;
  }

  
  restar():void{
    this.numero = this.numero-1;
  }

  acumular(valor:number){
    this.numero +=valor;
  }
}
