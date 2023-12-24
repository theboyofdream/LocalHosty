import { useNavigation } from '@react-navigation/native';
import { PaperScreen } from 'components';
import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { Icon, List } from 'react-native-paper';
import { useTheme } from 'theme';

export function HomeScreen() {
  const { colors } = useTheme()
  const { navigate } = useNavigation();
  const [serverOn, setServerState] = useState(false)
  const toggleServer = () => setServerState(!serverOn);
  const [serverUrl, setServerUrl] = useState('');

  function startServer() {

  }

  return (
    <PaperScreen style={$homescreen}>
      <View />
      <View style={{ maxWidth: 330, width: '100%', gap: 4 }}>
        <List.Item
          left={() => <Icon source={serverOn ? "pause" : "play"} size={24} />}
          title={`${serverOn ? "Stop" : "Start"} Server`}
          description={serverOn ? `Access url: ${serverUrl}` : "Start server to share files & folder."}
          onPress={toggleServer}
        />
        <List.Item
          left={() => <Icon source="folder" size={24} />}
          title="Select files & folders"
          description="You can select multiple items to share."
          onPress={toggleServer}
        />
      </View>
    </PaperScreen>
  );
}


const $homescreen: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'space-around'
}
