import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import { Icon } from './assets';
import ArrowLeftLineSvg from './assets/icons/arrow-left-line.svg';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1 }}>
          <ArrowLeftLineSvg width={28} height={28} color={'black'} />
          <Icon source='folder-plus' />
          <Icon source='pause' />
          <Icon source='play' />
          <Icon source='setting' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
