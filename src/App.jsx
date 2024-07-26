import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DigiteSeuNome from './components/DigiteSeuNome';

function App() {
  return (
    <SafeAreaView style={style.App}>
      <DigiteSeuNome />
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
