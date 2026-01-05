// Components
import Routes from "@/components/routes";

// Theme Context
import { ThemeProvider } from "@/context/ThemeProvider";

// Todos Context
import { TodosProvider } from "@/context/TodosProvider";

export default function RootLayout() {
  return (
    <TodosProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </TodosProvider>
  );
}
