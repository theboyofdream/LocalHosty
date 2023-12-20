import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ViewStyle
} from 'react-native';
import { Icon } from './assets';
import ArrowLeftLineSvg from './assets/icons/arrow-left-line.svg';
import { Button } from './components';

export default function App(): React.JSX.Element {

  const [serverOn, setServerState] = useState(false)


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
        <ArrowLeftLineSvg width={28} height={28} color={'black'} />

        <Icon source='play' />
      </View>
      <Text>BODY</Text>
      <Text>BODY</Text>
      <Text>BODY</Text>
      <View style={$footer}>
        <Button
          text={`Server ${serverOn ? 'On' : 'Off'}`}
          icon={serverOn ? 'play' : 'pause'}
          onPress={() => setServerState(!serverOn)}
          reverse
        />

        <Button
          // text="add folders & files"
          icon='folder-plus'
        />
        <Button
          // text="Settings"
          icon='setting'
        />
        <Button
          // text="Share"
          icon='share'
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const $row: ViewStyle = {
  flexDirection: 'row',
  gap: 8
}
const $footer: ViewStyle = {
  ...$row,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  minHeight: 60,
  height: '10%',
  maxHeight: 100,
  backgroundColor: 'red',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
}
