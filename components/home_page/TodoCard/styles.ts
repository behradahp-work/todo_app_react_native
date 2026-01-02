// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(completed: boolean, colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      gap: 20,
      padding: 15,
      backgroundColor: colors.surface,
      borderRadius: 14,
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginBottom: 15,
    },
    checkmark: {
      justifyContent: "center",
      alignItems: "center",
      width: 30,
      height: 30,
      borderRadius: 100,
      borderWidth: completed ? 0 : 2,
      borderColor: colors.border,
      backgroundColor: completed
        ? colors.success
        : colors.gradients.background[1],
    },
    leftContainer: {
      gap: 20,
    },
    title: {
      width: 300,
      fontSize: 20,
      fontWeight: "medium",
      color: !completed ? colors.text : colors.textMuted,
      textDecorationLine: completed ? "line-through" : "none",
      textDecorationStyle: "solid",
    },
    actionsContainer: {
      flexDirection: "row",
      gap: 10,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: 13,
      borderRadius: 100,
    },
  });
}
