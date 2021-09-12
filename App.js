import React from 'react';
import { View, Text} from 'react-native';

function App(){

  return(
    //flex vai ocupar toda a tela!
    <View style={{flex: 1, backgroundColor:'#121212'}}> 
      <View style={{backgroundColor:'#121212', height:65}}></View>

      <View style={{backgroundColor:'#DDD', flex: 1}}>
        <Text>Wessh</Text>
        <Text>Sub, texto aqui!</Text>
      </View>

      <View style={{backgroundColor:'#121212', height:65}}></View>
    </View>
  );
}
export default App;
