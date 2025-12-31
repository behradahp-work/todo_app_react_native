// Components
import Routes from "@/components/routes";

// Theme Context
import { ThemeProvider } from "@/context/ThemeProvider";

// Theme Context
import { AuthProvider } from "@/context/AuthProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
