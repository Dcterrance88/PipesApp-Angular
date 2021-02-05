import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  public cambioMayuscula : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public cambio() : void {
    this.cambioMayuscula = !this.cambioMayuscula;
  }

}
