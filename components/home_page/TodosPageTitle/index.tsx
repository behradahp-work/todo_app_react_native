// Expo
import { LinearGradient } from "expo-linear-gradient";

// React Native
import { View, Text } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

const TodosPageTitle = ({ colors }: { colors: ColorScheme }) => {
  const { count, completed } = useTodos();
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradients.primary}
        style={styles.iconContainer}
      >
        <Ionicons name='flash-outline' color={"white"} size={30} />
      </LinearGradient>

      <View style={styles.textsContainer}>
        <Text style={styles.mainTitle}>Today's Tasks</Text>
        <Text style={styles.completedTasks}>
          {completed} of {count} completed
        </Text>
      </View>

      <Text style={{ fontSize: 30 }}>👀</Text>
    </View>
  );
};

export default TodosPageTitle;
