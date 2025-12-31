export interface TodosResult {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}
export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface AddTodoPayload {
  todo: string;
  completed: boolean;
  userId: number;
}
