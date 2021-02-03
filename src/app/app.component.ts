import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nombre : string = 'doc terrance';
  public valor : number = 1000;
  public obj = {
    nombre: 'terrance'
  }

  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }
}
