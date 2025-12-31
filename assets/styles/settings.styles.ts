// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function settingsStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 30,
      paddingTop: 15,
      paddingHorizontal: 25,
    },
    scrollView: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
  });
}
