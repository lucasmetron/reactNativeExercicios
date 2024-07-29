import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const MegaGenenerator = () => {
  const [qtdNumber, setQtdNumber] = useState(0);
  const [listNumbers, setListNumbers] = useState([]);

  function generateNumbers() {
    if (qtdNumber > 0) {
      const newList = [];

      for (let i = 0; i < qtdNumber; i++) {
        newList.push(Math.floor(Math.random() * (100 - 1) + 1));
      }

      setListNumbers(newList.sort((a, b) => a - b));
    }
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Gerador da Mega-Sena</Text>
      <TextInput
        style={styles.Input}
        placeholder="Insira quantidade de dezenas sorteadas"
        onChangeText={value => {
          setQtdNumber(+value);
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.BtnGenerator} onPress={generateNumbers}>
        <Text style={styles.TxtBtn}>Gerar</Text>
      </TouchableOpacity>

      <View style={styles.ListNumbers}>
        {listNumbers.length === 0 ? (
          <Text style={styles.EmptyList}>Pressione em gerar!</Text>
        ) : (
          listNumbers.map((item, i) => (
            <View style={styles.itemList} key={i}>
              <Text style={styles.itemListTxt}>{item}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  Title: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },

  BtnGenerator: {
    backgroundColor: 'blue',
    padding: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  TxtBtn: {
    fontSize: 15,
    color: 'white',
  },

  ListNumbers: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemList: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
  },

  itemListTxt: {
    color: 'white',
  },

  EmptyList: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    color: 'black',
  },

  Input: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
  },
});

export default MegaGenenerator;
