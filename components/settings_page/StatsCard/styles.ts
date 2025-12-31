// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(colors: ColorScheme, mainColor: string) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      height: 85,
      paddingHorizontal: 20,
      borderRadius: 20,
      borderLeftWidth: 4,
      borderLeftColor: mainColor,
      marginTop: 20,
    },
    iconContainer: {
      padding: 10,
      borderRadius: 100,
      backgroundColor: mainColor,
    },
    textsContainer: {
      flexGrow: 1,
    },
    number: {
      fontSize: 30,
      fontWeight: "bold",
      color: colors.text,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.textMuted,
    },
  });
}
