// React
import React from "react";

// React Native
import AsyncStorage from "@react-native-async-storage/async-storage";

// Types
import { ColorScheme } from "@/types/common.types";

// Constants
import { darkColors, lightColors } from "@/constants/colors";

// ------------------------------------ Context ------------------------------------
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

// ------------------------------------ Provider ------------------------------------
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ------------------------------------ Hook ------------------------------------
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
