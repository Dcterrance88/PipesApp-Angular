import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  public nombreLower: string = 'terrance';
  public nombreUpper: string = 'TERRANCE';
  public nombreCompleto: string = 'DoC TeRrAnCe';

  public fecha : Date = new Date();

}
