export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  createdAt: string;
}
export interface AddTodoPayload {
  todo: string;
  completed: boolean;
}
export interface DeleteTodoResult {
  success: boolean;
  message: string;
}
