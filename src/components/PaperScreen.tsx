import { ViewProps } from "react-native";
import { useTheme } from "react-native-paper";
import { Screen } from "react-native-screens";

export function PaperScreen(props: ViewProps) {
  const { colors } = useTheme();
  return (
    <Screen style={[{
      flex: 1,
      backgroundColor: colors.background
    },
    props.style
    ]}>
      {props.children}
    </Screen>
  )
}
