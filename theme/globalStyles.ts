import { StyleSheet } from "react-native";
import { lightColors, darkColors } from "./colors";
import { useThemeMode } from "../hooks/useTheme";

export function useGlobalStyles() {
  const mode = useThemeMode();
  const colors = mode === "dark" ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.textPrimary,
    },
    paragraph: {
      fontSize: 16,
      color: colors.textSecondary,
      marginVertical: 8,
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    buttonText: {
      color: colors.textPrimary,
      fontWeight: "bold",
      fontSize: 16,
    },
  });
}
