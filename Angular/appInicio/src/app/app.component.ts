import { Component } from '@angular/core';
import { Servidor } from './compartido/servidor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*servidores: Array<{nombre: string, estado: string, descripcion: string, area: string}> = [
    {nombre: "Firewall", estado: "Activo", descripcion: "Uso exclusivo del area de seguridad", area: "Seguridad"},
    {nombre: "Web Piloto", estado: "Activo", descripcion: "Usado por el Proyecto Piloto20", area: "Desarrollo"}
  ]*/

  servidorSeleccionado

  servidores: Array<Servidor> = [
    new Servidor("Firewall", "Activo", "Uso exclusivo del area de seguridad", "Seguridad"),
    new Servidor("Web Piloto", "Activo", "Usado por el Proyecto Piloto20", "Desarrollo")
  ]

  seleccionServer(Servidor) {
    this.servidorSeleccionado = Servidor
  }
}
