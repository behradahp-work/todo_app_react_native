// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
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
    mainTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.text,
    },
  });
}
