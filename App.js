import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function App(){
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  
  function sendButton(){
    if(input.length > 0){
      setName(input);
      return;
    }else{
      setName('');
      alert('Please enter');
    }
    
  }

  return(
    <View style={styles.container}> 

    <TextInput
      style={styles.textInput}
      placeholder="Digite seu nome"
      onChangeText={(text) => setInput(text)}
    />

    <Button title="Send" onPress={sendButton}/>

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
    marginTop: 15,
    fontSize: 25,
  }
});

export default App;
