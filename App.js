import React from 'react';
import { View, Text, Image } from 'react-native';

function App(){
  let name = 'Wessh';
  return(
    <View>
      <Text>
        Mendix!!
      </Text>
      <Text style={{ color: '#FF7100', fontSize: 25, margin: 15 }}>
        Ele é legal!!
      </Text>
      <View style={{ backgroundColor: '#FF7100', height: 25, width: 25, margin: 15}}></View>

      <Image
        source={{ uri: 'https://cdn.discordapp.com/attachments/881892744979701780/886047138981773323/FB_IMG_1631320454883.jpg'}}
        style={{ width: 300, height: 300}}
      />
    </View>
  );
}

export default App;