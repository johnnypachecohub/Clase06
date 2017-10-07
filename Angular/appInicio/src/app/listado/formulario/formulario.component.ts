import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Servidor } from '../../compartido/servidor'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Para la 3era forma:
  nombreServidorForma3: string
  estadoServidorForma3: string
  descripcionServidorForma3: string
  areaServidorForma3: string

  //Para la 2da forma:
  @ViewChild("nombre") nombre2: ElementRef
  @ViewChild("estado") estado2: ElementRef
  @ViewChild("descripcion") descripcion2: ElementRef
  @ViewChild("area") area2: ElementRef

  /*@Output("nuevoServer") eventoAgregarServidor = new EventEmitter<{nombre: string, estado: string, descripcion: string, area: string}>()*/
  @Output("nuevoServer") eventoAgregarServidor = new EventEmitter<Servidor>()

  constructor() { }

  //1era forma
  agregarServidor1(nombre: string, estado: string, descripcion: string, area: string) {
    console.log(nombre)

  }

  //2da forma
  agregarServidor2() {
    console.log(this.nombre2.nativeElement.value)
  }

  //3era forma
  agregarServidor3() {
    /*const data = {
      nombre: this.nombreServidorForma3, 
      estado: this.estadoServidorForma3, 
      descripcion: this.descripcionServidorForma3, 
      area: this.areaServidorForma3
    }*/
    const data: Servidor = new Servidor(
      this.nombreServidorForma3, 
      this.estadoServidorForma3, 
      this.descripcionServidorForma3, 
      this.areaServidorForma3
    )
    
    this.eventoAgregarServidor.emit(data)

    this.nombreServidorForma3 = ''
    this.estadoServidorForma3 = ''
    this.descripcionServidorForma3 = ''
    this.areaServidorForma3 = ''

    console.log('agregarServidor3:',this.nombreServidorForma3)
  }

  ngOnInit() {
  }

}
