export const API_ENDPOINTS = {
  getTodos: "https://recipe-api.liara.run/api/todos",
  addTodo: "https://recipe-api.liara.run/api/todos",
  updateTodo: (id: number) => `https://recipe-api.liara.run/api/todos/${id}`,
  changeTodoStatus: (id: number) =>
    `https://recipe-api.liara.run/api/todos/${id}/status`,
  deleteTodo: (id: number) => `https://recipe-api.liara.run/api/todos/${id}`,
};
