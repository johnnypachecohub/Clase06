import { Component, OnInit, Input } from '@angular/core';
import { Libros } from '../compartido/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  @Input() lista: Array<Libros>

  constructor() { }

  ngOnInit() {
    console.log('lista:',this.lista)
  }

}
