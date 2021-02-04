import { Component } from '@angular/core';

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
  public clientes: string[] = ['Juan', 'carlos', 'luis', 'maria'];

  //i18nSelect
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
}
