// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 15,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: colors.gradients.muted[0],
    },
    input: {
      flexGrow: 1,
      minHeight: 55,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 14,
      padding: 20,

      fontSize: 20,
      fontWeight: "medium",
    },
  });
}
