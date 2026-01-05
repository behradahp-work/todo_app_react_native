// React Native
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, ScrollView, Text } from "react-native";

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
import { Todo } from "@/types/todo.types";

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

export default function Index() {
  const { todos, loading, getTodos } = useTodos();

  const { colors } = useTheme();
  const styles = homeStyles(colors);

  const [editableTodo, setEditableTodo] = useState<Todo | null>(null);

  // HANDLE GET TODOS
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TodosPageTitle colors={colors} />
      <ProgressBar colors={colors} />
      <AddTodo colors={colors} editableTodo={editableTodo} />

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
              onClickEdit={() => setEditableTodo(todo)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
