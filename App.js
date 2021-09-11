import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

function App(){
  const [name, setName] = useState(''); //[] <- Nome do estado, A função para o estado.  () <- Valor padrão.
  const [age, setAge] = useState('');
function change(name, age){
  setName(name);
  setAge(age);
}
function clean(){
  setAge('');
  setName('');
}
  return(
    <View style={{alignItems: 'center', marginTop:25}}>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Button title="Change name" onPress={ () =>change('Wessh', 25)} />
      <Button title="Clean" onPress={clean} />
    </View>
  );
}

export default App;
