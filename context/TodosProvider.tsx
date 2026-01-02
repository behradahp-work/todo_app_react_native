// React
import React from "react";

// API
import useFetch from "@/hooks/useFetch";
import { API_ENDPOINTS } from "@/constants/endpoints";

// Types
import { AddTodoPayload, DeleteTodoResult, Todo } from "@/types/todo.types";

interface TodosContextType {
  todos: Todo[];
  count: number;
  active: number;
  completed: number;
  loading: boolean;
  getTodos: () => void;
  addTodo: (todo: AddTodoPayload) => void;
  updateTodo: (id: number, todo: AddTodoPayload) => void;
  changeTodoStatus: (id: number, status: { completed: boolean }) => void;
  deleteTodo: (id: number) => void;
}
const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  count: 0,
  active: 0,
  completed: 0,
  loading: false,
  getTodos: () => {},
  addTodo: () => {},
  updateTodo: () => {},
  changeTodoStatus: () => {},
  deleteTodo: () => {},
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  // API
  const { getMethod, data: apiTodos, loading: getLoading } = useFetch<Todo[]>();
  const {
    postMethod,
    data: addTodoData,
    loading: addLoading,
  } = useFetch<Todo[], AddTodoPayload>();
  const {
    putMethod,
    data: updateTodoData,
    loading: updateLoading,
  } = useFetch<Todo[], AddTodoPayload>();
  const { putMethod: updateTodoStatus, data: updateTodoStatusData } = useFetch<
    Todo[],
    { completed: boolean }
  >();
  const {
    deleteMethod,
    data: deleteTodoData,
    loading: deleteLoading,
  } = useFetch<DeleteTodoResult>();

  //   States
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [count, setCount] = React.useState<number>(0);
  const [active, setActive] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<number>(0);

  //   HANDLE GET TODOS
  const getTodos = async () => {
    setTodos([]);
    getMethod(API_ENDPOINTS.getTodos);
  };
  React.useEffect(() => {
    if (!apiTodos) return;

    setTodos(apiTodos.sort((a, b) => a.id - b.id));
    setCount(apiTodos.length);
    setActive(apiTodos.filter((todo) => !todo.completed).length);
    setCompleted(apiTodos.filter((todo) => todo.completed).length);
  }, [apiTodos]);

  //   HANDLE ADD TODO
  const addTodo = (todo: AddTodoPayload) => {
    setTodos([]);
    postMethod(API_ENDPOINTS.addTodo, todo);
  };
  React.useEffect(() => {
    if (!addTodoData) return;

    getTodos();
  }, [addTodoData]);

  //   HANDLE UPDATE TODO
  const updateTodo = (id: number, todo: AddTodoPayload) => {
    setTodos([]);
    putMethod(API_ENDPOINTS.updateTodo(id), todo);
  };
  React.useEffect(() => {
    if (!updateTodoData) return;

    getTodos();
  }, [updateTodoData]);

  //   HANDLE UPDATE TODO Status
  const changeTodoStatus = (id: number, status: { completed: boolean }) => {
    updateTodoStatus(API_ENDPOINTS.changeTodoStatus(id), status);
  };
  React.useEffect(() => {
    if (!updateTodoStatusData) return;

    setTodos([
      ...todos.map((todo) => {
        if (todo.id === updateTodoStatusData[0].id) {
          todo.completed = updateTodoStatusData[0].completed;
        }
        return todo;
      }),
    ]);
  }, [updateTodoStatusData]);

  //   HANDLE DELETE TODO
  const deleteTodo = (id: number) => {
    setTodos([]);
    deleteMethod(API_ENDPOINTS.deleteTodo(id));
  };
  React.useEffect(() => {
    if (!deleteTodoData || !deleteTodoData.success) return;

    getTodos();
  }, [deleteTodoData]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        count,
        active,
        completed,
        loading: getLoading || addLoading || updateLoading || deleteLoading,
        getTodos,
        addTodo,
        updateTodo,
        changeTodoStatus,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => React.useContext(TodosContext);
