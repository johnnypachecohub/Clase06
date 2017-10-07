import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Servidor } from '../compartido/servidor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
  //encapsulation: ViewEncapsulation.Emulated
  //None: Afecta a todos los componentes
  //Native: Afecta solo al componente. No es afectado por estilos externos
  //Emulated: Afecta solo al componente pero tambien afectan estilos externo.
})
export class ListadoComponent implements OnInit {

  /*@Input() lista: Array<{nombre: string, estado: string, descripcion: string, area: string}>*/
  @Input() lista: Array<Servidor>
  @Output("seleccionado") seleccionado = new EventEmitter<Servidor>()

  constructor() {
    
  }

  ngOnInit() {
    console.log('lista:',this.lista)
  }

  nuevoServidor(data: {nombre: string, estado: string, descripcion: string, area: string}) {
    console.log('data recibida de formulario:', data)
    this.lista.push(data)
  }

  servidorSeleccionado(servidor: Servidor) {
    this.seleccionado.emit(servidor)
  }
}
