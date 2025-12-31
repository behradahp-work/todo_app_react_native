// React Native
import { ColorScheme } from "@/types/common.types";

// Types
import { StyleSheet } from "react-native";

export default function loginStyles(colors: ColorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 35,
    },
    title: {
      fontSize: 34,
      fontWeight: "bold",
      color: colors.text,
    },
    filedsContainer: {
      gap: 15,
    },
    input: {
      minWidth: "90%",
      minHeight: 55,
      paddingHorizontal: 20,
      borderColor: colors.border,
      borderWidth: 2,
      borderRadius: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
    button: {
      minWidth: "90%",
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    buttonText: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.surface,
    },
    error: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.danger,
    },
  });
}
