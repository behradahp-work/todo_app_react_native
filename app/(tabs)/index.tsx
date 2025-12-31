// React Native
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import TodosPageTitle from "@/components/home_page/TodosPageTitle";
import ProgressBar from "@/components/home_page/ProgressBar";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Styles
import homeStyles from "@/assets/styles/home.styles";

export default function Index() {
  const { colors } = useTheme();
  const styles = homeStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <TodosPageTitle colors={colors} />
      <ProgressBar colors={colors} />
    </SafeAreaView>
  );
}
