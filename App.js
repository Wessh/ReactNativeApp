import React from 'react';
import { View, Text} from 'react-native';

function App(){

  return(
    //justifyContent trabalha com a linha, já o alignItems trabalha com a coluna.
    <View style={{  
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'space-around', 
      }}> 

      <View style={{backgroundColor:'#121212', height:50, width:50}}></View>

      <View style={{backgroundColor:'red', height:50, width:50}}></View>

      <View style={{backgroundColor:'green', height:50, width:50}}></View>
      
    </View>
  );
}
export default App;
