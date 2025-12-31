// React Native
import { View, Text, Pressable } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

const PreferencesItem = ({
  colors,
  mainColor,
  title,
  icon,
  active,
  onPress,
}: {
  colors: ColorScheme;
  mainColor: string;
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  onPress: () => void;
}) => {
  const styles = themedStyles(colors, mainColor, active);

  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Pressable style={styles.switchContainer} onPress={onPress}>
        <View style={styles.switch} />
      </Pressable>
    </View>
  );
};

export default PreferencesItem;
