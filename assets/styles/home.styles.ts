// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function homeStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 30,
      paddingTop: 15,
      paddingHorizontal: 15,
    },
    scrollView: {
      gap: 30,
    },
    noDataTitle: {
      fontSize: 25,
      fontWeight: "bold",
      color: colors.textMuted,
    },
  });
}
