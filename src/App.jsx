import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlexboxV4 from './components/FlexboxV4';

function App() {
  return (
    <SafeAreaView style={style.FlexV1}>
      <FlexboxV4 />
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
