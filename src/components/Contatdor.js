import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Contatdor = ({vInicio}) => {
  const [value, setValue] = useState(vInicio);

  function handleCont(isPlus) {
    setValue(v => (isPlus ? v + 1 : v - 1));
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Txt}>{value}</Text>
      <View style={styles.Btns}>
        <Button onPress={() => handleCont(true)} title="+" />
        <Button onPress={() => handleCont(false)} title="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Btns: {
    flexDirection: 'row',
    gap: 10,
  },

  Txt: {
    fontSize: 50,
  },
});

export default Contatdor;
