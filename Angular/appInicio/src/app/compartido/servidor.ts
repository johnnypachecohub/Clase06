export class Servidor {
  nombre: string
  estado: string
  descripcion: string
  area: string

  constructor(nombre: string, estado: string, descripcion: string, area: string) {
    this.nombre = nombre
    this.estado = estado
    this.descripcion = descripcion
    this.area = area
  }
}