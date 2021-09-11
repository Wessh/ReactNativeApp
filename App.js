import React from 'react';
import { View, Text, Image } from 'react-native';

function App(){
  let name = 'Wessh';
  return(
    <View style={{alignItems: 'center'}}>
      <View style={{ backgroundColor: '#FF7100', height: 25, width: 25, margin: 15}}></View>
      <Logo Wi={300} He={300} Na={name}/>
      
    </View>
  );
}

export default App;

function Logo(props){ // ** Boa pratica, todo componente começar com letra maiuscula
  let image = 'https://pbs.twimg.com/media/Exwadx7W8Acct5F.jpg';
  let imageDi = 'https://imagem.band.com.br/f_336905.jpg';
  let imageDic= 'https://i.kym-cdn.com/entries/icons/original/000/033/487/rick.jpg';
  return(
    <View>
    <Image source={{uri: image}} 
    style={{ width: props.Wi, height: props.He}}/>
<Text style={{ color: '#FF7100', fontSize: 25, margin: 15 }}> {props.Na} </Text>
    </View>
  );
}