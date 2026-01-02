// Components
import Routes from "@/components/routes";

// Theme Context
import { ThemeProvider } from "@/context/ThemeProvider";

// Theme Context
import { AuthProvider } from "@/context/AuthProvider";

// Todos Context
import { TodosProvider } from "@/context/TodosProvider";

export default function RootLayout() {
  return (
    <TodosProvider>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </TodosProvider>
  );
}
