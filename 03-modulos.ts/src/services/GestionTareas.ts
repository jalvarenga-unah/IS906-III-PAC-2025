import { Prioridad, Tarea } from "../interfaces/Tarea.interface";
import { TareaModel } from "../models/Tarea.model";

export class GestionTareas {
  private tareas: Tarea[] = [];
  private siguienteId: number = 1;

  obtenerTodasLasTareas(completada: boolean | null = null): Tarea[] {
    if (completada === null) return this.tareas;

    return this.tareas.filter((tarea) => tarea.completada === completada);
  }

  agregarTarea(
    titulo: string,
    descripcion: string,
    prioridad: Prioridad
  ): Tarea {
    const nuevaTarea = new TareaModel(
      this.siguienteId++, // this.siguienteId = this.siguienteId + 1
      titulo,
      descripcion,
      false,
      prioridad
    );

    this.tareas.push(nuevaTarea);

    return nuevaTarea;
  }

  eliminarTarea(id: number): boolean {
    const indice = this.tareas.findIndex((tarea) => tarea.id === id);

    if (indice === -1) {
      return false;
    }

    this.tareas.splice(indice, 1); // para eliminar

    return true;
  }

  //   modificarTarea(id: number, data: Partial<Tarea>): Tarea | null {
  //     return null;
  //   }

  //   modificarTarea(
  //     id: number,
  //     data: Pick<Tarea, "titulo" | "descripcion" | "prioridad">
  //   ): Tarea | null {
  //     return null;
  //   }

  //   modificarTarea(
  //     id: number,
  //     data: Omit<Tarea, "id" | "completada">
  //   ): Tarea | null {
  //     return null;
  //   }

  /*
{
  
  descripcion: "Nueva descripcion",
  
}
*/

  // ? Usando Pick, para obligar a enviar siempre los 3 campos
  //   modificarTarea(
  //     id: number,
  //     data: Pick<Tarea, "titulo" | "descripcion" | "prioridad">
  //   ): Tarea | null {
  //     const tareaIndex = this.tareas.findIndex((tarea) => tarea.id === id);

  //     if (tareaIndex === -1) {
  //       return null;
  //     }

  //     this.tareas[tareaIndex].titulo = data.titulo;
  //     this.tareas[tareaIndex].descripcion = data.descripcion;
  //     this.tareas[tareaIndex].prioridad = data.prioridad;

  //     return this.tareas[tareaIndex];
  //   }

  //? Usando Partial, para que envie solo los campos que quiera actualizar
  modificarTarea(id: number, cambios: Partial<Tarea>): boolean {
    const tarea = this.tareas.find((tarea) => tarea.id === id);

    //eliminamos previamente las priopiedades que no queremos que se actualicen
    delete cambios?.id;
    delete cambios?.completada;

    if (tarea) {
      Object.assign(tarea, cambios);
      return true;
    }

    return false;
  }

  cambiarEstadoTarea(id: number, completada: boolean): boolean {
    const tarea = this.tareas.find((tarea) => tarea.id === id);

    if (tarea) {
      tarea.completada = completada;
      return true;
    }

    return false;
  }
}
