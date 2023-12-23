import { useNavigation } from '@react-navigation/native';
import { Icon } from 'assets';
import { Spacer, Text } from 'components';
import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  ViewStyle
} from 'react-native';
import { useTheme } from 'theme';

export function HomeScreen() {
  const { colors } = useTheme()
  const { navigate } = useNavigation();
  const [serverOn, setServerState] = useState(false)



  const $row: ViewStyle = {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  }
  const $list: ViewStyle = {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: '80%',
    maxWidth: 310,
    padding: 12,
    borderRadius: 18,
    // backgroundColor: colors.text,
    backgroundColor: colors.backgroundTertairy,
    // borderWidth: 1,
    // borderColor: colors.backgroundSecondary,
    alignSelf: 'center'
  }
  const $icon: ViewStyle = {
    padding: 8,
    borderRadius: 100,
    backgroundColor: colors.background
  }

  return (
    <SafeAreaView style={{ flex: 1, gap: 9, alignItems: 'center', justifyContent: 'center' }}>

      <View style={{
        width: '80%',
        maxWidth: 250,
        aspectRatio: 1,
        maxHeight: 250,
        // backgroundColor: 'coral',
        alignSelf: 'center'
      }}>

      </View>

      <Spacer size={30} />

      <Pressable
        style={$list}
        onPress={() => setServerState(!serverOn)}>
        <View style={$icon}>
          <Icon source={serverOn ? 'pause' : 'play'} />
        </View>
        <View>
          <Text>{`Server is ${serverOn ? 'On' : 'Off'}`}</Text>
          <Text variant='xs'>{serverOn ?
            'Url: http://192.168.1.29:8080'
            : 'Server in not running'
          }</Text>
        </View>
      </Pressable>

      <Pressable
        style={$list}
        onPress={() => navigate('choose')}>
        <View style={$icon}>
          <Icon source="folder-plus" />
        </View>
        <View>
          <Text>Choose</Text>
          <Text variant='xs'>Select files & folders</Text>
        </View>
      </Pressable>

      <Pressable
        style={$list}
        onPress={() => setServerState(!serverOn)}>
        <View style={$icon}>
          <Icon source="setting" />
        </View>
        <View>
          <Text>Settings</Text>
          <Text variant='xs'>Show more Settings</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

