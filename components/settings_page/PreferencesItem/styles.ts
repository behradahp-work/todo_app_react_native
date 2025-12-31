// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function themedStyles(
  colors: ColorScheme,
  mainColor: string,
  active?: boolean
) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 10,
    },
    iconContainer: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: mainColor,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    switchContainer: {
      width: 50,
      height: 26,
      borderRadius: 20,
      backgroundColor: active ? mainColor : colors.gradients.muted[1],
    },
    switch: {
      position: "absolute",
      top: 3,
      left: active ? 27 : 3,
      width: 20,
      height: 20,
      borderRadius: 100,
      backgroundColor: colors.surface,
    },
  });
}
