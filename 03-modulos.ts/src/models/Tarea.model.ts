import { Prioridad, Tarea } from "../interfaces/Tarea.interface";

export class TareaModel implements Tarea {
  // Las propiedades de la clase
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public completada: boolean,
    public prioridad: Prioridad = Prioridad.MEDIA
  ) {}

  marcarCompletada(): void {
    this.completada = true;
    console.log(`La tarea ${this.titulo} ha sido marcada como completada.`);
  }
}
