import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useTheme } from "theme";

type TextProps = RNTextProps & {
  variant?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  bold?: boolean,
  italic?: boolean,
  muted?: boolean,
  link?: boolean
}

export function Text(props: TextProps) {
  const { colors, fontSize } = useTheme()

  return (
    <RNText {...props} style={[
      {
        color: props.link ? colors.link : props.muted ? colors.textMuted : colors.text,
        fontSize: fontSize[props.variant ?? 'sm'],
        fontWeight: props.bold ? "bold" : 'normal',
        fontStyle: props.italic ? "italic" : "normal",
        textDecorationLine: props.link ? 'underline' : 'none',
        textDecorationColor: props.link ? colors.link : colors.text,
        letterSpacing: 1.1
      },
      props.style
    ]}>
      {props.children}
    </RNText>
  )
}
