import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styles: []
})
export class ErroresComponent  {

  @Input() mensaje: String;
  @Input() titulo:String;
  constructor() { 
  }

}
