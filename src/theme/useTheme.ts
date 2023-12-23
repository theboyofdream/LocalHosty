import { useColorScheme } from "react-native";
import { theme } from "./theme";

export function useTheme() {
  const colorScheme = useColorScheme()
  return {
    colors: theme[colorScheme ?? "light"],
    spacing: theme.spacing,
    fontSize: theme.fontSize
  }
}
