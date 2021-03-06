import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  public nombre: string = 'terrance';
  public genero: string = 'masculino';
  //i18nPlural
  public clientes: string[] = ['Juan', 'carlos', 'luis', 'maria', 'manuel'];
  //KeyValuePipe
  public persona = {
    nombre: 'terrance',
    edad: 29,
    direccion: 'Bogotá, Colombia'
  }
  // Async Pipe
  public miObservable = interval(1000); // 0,1,2,3,4,5,6...
  public valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pasaron 8 segundos, ejecutando Promesa')
    }, 8000);
  });
  //JsonPipe
  public heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acuaman',
      vuela: false,
    }
  ]

  //i18nSelect
  public invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  public clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public cambiarCliente(){
    this.nombre = (this.nombre === 'terrance')? 'susana': 'terrance';
    this.genero = (this.genero === 'masculino') ? 'femenino': 'masculino';
  }

  public borrarCliente(){
    console.log('hola')
    if(this.clientes.length>=0){
      this.clientes.pop();
    }
  }
}
