// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      width: "100%",
      padding: 20,
      borderRadius: 20,
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
    },
  });
}
