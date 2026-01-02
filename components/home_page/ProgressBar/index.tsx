// Expo
import { LinearGradient } from "expo-linear-gradient";

// React Native
import { View, Text } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

const ProgressBar = ({ colors }: { colors: ColorScheme }) => {
  const { count, completed } = useTodos();
  const percent = count === 0 ? 0 : Math.floor((completed / count) * 100);
  const styles = themedStyles(colors, percent);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={colors.gradients.success}
          style={styles.progress}
        />
      </View>
      <Text style={styles.text}>{percent}%</Text>
    </View>
  );
};

export default ProgressBar;
