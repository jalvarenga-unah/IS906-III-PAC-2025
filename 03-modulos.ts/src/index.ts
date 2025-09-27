import { Prioridad } from "./interfaces/Tarea.interface";
import { GestionTareas } from "./services/GestionTareas";

// patron MVC

const gestionTareas = new GestionTareas();

// agregar tarea
// const tarea = new TareaModel(1, "test", "descripcion", false); // Media por defecto
// const tarea2 = new TareaModel(2, "test", "descripcion", false, Prioridad.BAJA);

// listar tareas (todas, completadas, pendientes)
console.log("======obteniendo tareas======");
console.log(gestionTareas.obtenerTodasLasTareas());

console.log("======agregando tareas======");
gestionTareas.agregarTarea(
  "Mi primer Tarea",
  "Creando mi primer TODO-APP con TS",
  Prioridad.ALTA
);
gestionTareas.agregarTarea(
  "Mi segunda Tarea",
  "Creando mi primer TODO-APP con TS",
  Prioridad.BAJA
);
gestionTareas.agregarTarea(
  "Mi tercer Tarea",
  "Creando mi primer TODO-APP con TS",
  Prioridad.MEDIA
);

console.log("======obteniendo tareas completadas======");
console.log(gestionTareas.obtenerTodasLasTareas(true));

// eliminar tarea
console.log("======eliminando tarea=======");
gestionTareas.eliminarTarea(2);

console.log("======obteniendo tareas======");
console.log(gestionTareas.obtenerTodasLasTareas());

// actualizar tarea
console.log("======actualizando tarea=====");
gestionTareas.modificarTarea(3, {
  descripcion: "Falta agregar la funcionalidad de completar una tarea",
  prioridad: Prioridad.ALTA,
});

console.log("======obteniendo tareas======");
console.log(gestionTareas.obtenerTodasLasTareas());

//marcar como copletada o pendiente

console.log("======completando tareas======");
gestionTareas.cambiarEstadoTarea(1, true);
gestionTareas.cambiarEstadoTarea(3, true);

console.log("======obteniendo tareas======");
console.log(gestionTareas.obtenerTodasLasTareas(true));
