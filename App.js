import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function App(){
  const [name, setName] = useState('');

  function getName(text) {
    
    if(text.length > 0){
      setName(text + '...');
    }else{
      setName('');
    }
  }

  return(
    <View style={styles.container}> 

    <TextInput
      style={styles.textInput}
      placeholder="Digite seu nome"
      onChangeText={(text) => getName(text)} // onChangeText, cada alteração de texto no input, ele chama uma função
    />

    <Text style={styles.textText}>{name}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height:45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  textText: {
    textAlign: 'center',
    fontSize: 25,
  }
});

export default App;
