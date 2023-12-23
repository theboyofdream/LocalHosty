import { Icon, IconSource } from "assets";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

type ButtonProps = {
  icon?: IconSource,
  text?: string,
  reverse?: boolean,
  onPress?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[$button, props.reverse && $reverse]} onPress={props.onPress}>
      {props.icon &&
        <View style={$icon}>
          <Icon source={props.icon} />
        </View>
      }
      <Text>{props.text || ''}</Text>
    </TouchableOpacity>
  )
}


const
  $button: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  $reverse: ViewStyle = {
    flexDirection: 'row-reverse'
  },
  $icon: ViewStyle = {
    padding: 8,
    borderRadius: 100,
    backgroundColor: '#ffffff30'
  }
