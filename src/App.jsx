import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MegaGenenerator from './components/MegaGenenerator/index';

function App() {
  return (
    <SafeAreaView style={style.FlexV1}>
      <MegaGenenerator />
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
