import { Component } from '@angular/core';
import { Libros } from './compartido/libros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  libros: Array<Libros> = [
    new Libros("Vargas Llosa", "La Fiesta del Chivo"),
    new Libros("Dante Allighieri", "La Divina Comedia")
  ]
}

