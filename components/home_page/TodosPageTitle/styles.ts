// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 20,
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      borderRadius: 15,
      backgroundColor: "red",
    },
    textsContainer: {
      justifyContent: "space-between",
    },
    mainTitle: {
      fontSize: 26,
      fontWeight: "bold",
      color: colors.text,
    },
    completedTasks: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textMuted,
    },
  });
}
