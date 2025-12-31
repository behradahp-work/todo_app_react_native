// React Native
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// Components
import TodosPageTitle from "@/components/home_page/TodosPageTitle";
import ProgressBar from "@/components/home_page/ProgressBar";
import AddTodo from "@/components/home_page/AddTodo";
import TodoCard from "@/components/home_page/TodoCard";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Styles
import homeStyles from "@/assets/styles/home.styles";

// Fake Data
import { todos } from "@/constants/fakeTodos";

export default function Index() {
  const { colors } = useTheme();
  const styles = homeStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <TodosPageTitle colors={colors} />
      <ProgressBar colors={colors} />
      <AddTodo colors={colors} />

      <ScrollView style={styles.scrollView}>
        {todos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} colors={colors} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
