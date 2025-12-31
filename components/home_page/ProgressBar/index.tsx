// Expo
import { LinearGradient } from "expo-linear-gradient";

// React Native
import { View, Text } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

const ProgressBar = ({ colors }: { colors: ColorScheme }) => {
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={colors.gradients.success}
          style={styles.progress}
        />
      </View>
      <Text style={styles.text}>50%</Text>
    </View>
  );
};

export default ProgressBar;
