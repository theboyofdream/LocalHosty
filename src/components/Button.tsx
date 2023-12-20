import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Icon, IconSource } from "../assets";

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
          <Icon source={props.icon} color={'white'} />
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
    padding: 8 * 1.5,
    borderRadius: 100,
    backgroundColor: '#ffffff30'
  }
