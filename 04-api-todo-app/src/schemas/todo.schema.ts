import * as z from "zod";

// establecer el idioma en español
z.config(z.locales.es());

import { Todo } from "../interfaces/todo.interface";

const todoSchema = z.object({
  title: z.string({
    
  }).min(1, "El titulo es requerido"),
  description: z.string().optional().nullable(),
  completed: z.boolean().default(false),
});

// export type Todo = z.infer<typeof todoSchema>;

export const validateTodo = (todo: Partial<Todo>) => {
  return todoSchema.safeParse(todo);
};
