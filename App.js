import React from 'react';
import { View, Text, Image } from 'react-native';

function App(){
  let name = 'Wessh';
  let image = 'https://pbs.twimg.com/media/Exwadx7W8Acct5F.jpg';
  return(
    <View style={{alignItems: 'center'}}>
      <View style={{ backgroundColor: '#FF7100', height: 25, width: 25, margin: 15}}></View>

      <Image
        source={{ uri: image}}
        style={{ width: 300, height: 300}}
      />
      <Text style={{ color: '#FF7100', fontSize: 25, margin: 15 }}> {name} </Text>
    </View>
  );
}

export default App;