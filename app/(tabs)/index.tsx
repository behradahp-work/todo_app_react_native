// React Native
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// React
import { useEffect, useState } from "react";

// Components
import TodosPageTitle from "@/components/home_page/TodosPageTitle";
import ProgressBar from "@/components/home_page/ProgressBar";
import AddTodo from "@/components/home_page/AddTodo";
import TodoCard from "@/components/home_page/TodoCard";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Styles
import homeStyles from "@/assets/styles/home.styles";

// Types
import { AddTodoPayload, Todo, TodosResult } from "@/types/todo.types";

// Auth Hook
import { useAuth } from "@/context/AuthProvider";

// API
import useFetch from "@/hooks/useFetch";
import { API_ENDPOINTS } from "@/constants/endpoints";

export default function Index() {
  const { getMethod, data: apiTodos, loading } = useFetch<TodosResult>();

  const { user } = useAuth();
  const { colors } = useTheme();
  const styles = homeStyles(colors);

  const [todos, setTodos] = useState<Todo[]>([]);
  const [editableTodo, setEditableTodo] = useState<Todo | null>(null);

  // HANDLE GET TODOS
  useEffect(() => {
    if (!user) return;

    getMethod(API_ENDPOINTS.getUserTodos + user.id);
  }, []);
  useEffect(() => {
    if (!apiTodos) return;

    setTodos(apiTodos.todos);
  }, [apiTodos]);

  // HANDLE ADD TODOS
  const handleAddTodo = (paylaod: AddTodoPayload) => {
    console.log("Addddd");
    setTodos([
      ...todos,
      {
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        ...paylaod,
      },
    ]);
  };

  // HANDLE EDIT TODO STATUS
  const handleEditTodo = (paylaod: AddTodoPayload) => {
    if (!editableTodo) return;

    setTodos([
      ...todos.map((todo) =>
        todo.id === editableTodo.id
          ? {
              ...todo,
              ...paylaod,
            }
          : todo
      ),
    ]);
    setEditableTodo(null);
  };

  // HANDLE DELETE TODO
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  // HANDLE CHANGE TODO STATUS
  const handleTodoStatusChange = (id: number) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    ]);
  };

  // Add new Todos to local storage
  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (!user) return null;

  return (
    <SafeAreaView style={styles.container}>
      <TodosPageTitle colors={colors} />
      <ProgressBar colors={colors} />
      <AddTodo
        colors={colors}
        userId={user.id}
        editableTodo={editableTodo}
        onAdd={handleAddTodo}
        onEdit={handleEditTodo}
      />

      <ScrollView style={styles.scrollView}>
        {loading ? (
          <ActivityIndicator size={50} color={colors.primary} />
        ) : todos.length === 0 ? (
          <Text style={styles.noDataTitle}>No Todos!</Text>
        ) : (
          <></>
        )}

        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              colors={colors}
              onStatusChange={() => handleTodoStatusChange(todo.id)}
              onDelete={() => handleDeleteTodo(todo.id)}
              onClickEdit={() => setEditableTodo(todo)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
