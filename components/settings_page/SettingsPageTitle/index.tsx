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

const SettingsPageTitle = ({ colors }: { colors: ColorScheme }) => {
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradients.primary}
        style={styles.iconContainer}
      >
        <Ionicons name='settings' color={"white"} size={30} />
      </LinearGradient>

      <Text style={styles.mainTitle}>Settings</Text>
    </View>
  );
};

export default SettingsPageTitle;
