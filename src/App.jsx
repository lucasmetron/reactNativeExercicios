import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Contatdor from './components/Contatdor';

function App() {
  return (
    <SafeAreaView style={style.App}>
      <Contatdor vInicio={0} />
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
