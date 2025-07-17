import { useColorScheme } from "react-native";

export function useThemeMode() {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? "dark" : "light";
}
