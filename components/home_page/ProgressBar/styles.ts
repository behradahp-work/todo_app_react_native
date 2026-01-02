// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme, percent: number) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 25,
    },
    progressContainer: {
      flexGrow: 1,
      height: 15,
      borderRadius: 100,
      backgroundColor: colors.border,
    },
    progress: {
      width: `${percent}%`,
      height: "100%",
      borderRadius: 100,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.gradients.success[0],
    },
  });
}
