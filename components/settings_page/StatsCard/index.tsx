// Expo
import { LinearGradient } from "expo-linear-gradient";

// React Native
import { View, Text } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

const StatsCard = ({
  colors,
  mainColor,
  title,
  icon,
  number,
}: {
  colors: ColorScheme;
  mainColor: string;
  title: string;
  icon: React.ReactNode;
  number: number;
}) => {
  const styles = themedStyles(colors, mainColor);

  return (
    <LinearGradient
      style={styles.container}
      colors={colors.gradients.background}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textsContainer}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

export default StatsCard;
