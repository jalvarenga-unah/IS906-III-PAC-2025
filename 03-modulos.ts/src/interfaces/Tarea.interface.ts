export enum Prioridad {
  BAJA = "baja",
  MEDIA = "media",
  ALTA = "alta",
}

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: Prioridad;
}
