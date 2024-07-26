import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Primeiro from './components/Primiero';
import Aleatorio from './components/Aleatorio';

function App() {
  console.log('teste log');
  console.warn('teste warn', {teste: 'oi'});
  return (
    <SafeAreaView style={style.App}>
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
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
