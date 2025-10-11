import { Todo } from "../interfaces/todo.interface";
import { randomUUID as uuid } from "node:crypto";
// import { v4 as uuid } from "uuid"; //? requiere de la instalacion de un paquete externo

//TODO: crear conexión a base de datos
// "base de datos"
const todos: Todo[] = [];

export const getAll = async () => todos;

export const findById = async (id: string) =>
  todos.find((todo) => todo.id === id);

export const create = async (todo: Partial<Todo>): Promise<Todo> => {
  // const newTodo: Todo = {
  //   id: uuid(),
  //   title: todo.title!,
  //   description: todo.description ?? null,
  //   completed: !!todo.completed,
  // };

  const newTodo = { id: uuid(), ...todo } as Todo;

  todos.push(newTodo);

  return newTodo;
};
