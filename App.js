import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function App(){

  return(
    <View style={styles.area}>
      <Text style={[styles.title, styles.tlign]}>Wessh</Text>
      <Text style={styles.tlign}>Texto escrito aqui!</Text>
      <Text style={styles.obs}>Mini texto!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area:{
    marginTop: 60,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#FF7100',
  },
  tlign:{
    textAlign: 'center'
  },
  obs:{
    alignItems: 'baseline',
    textAlign: 'right',
    color: '#00FF00',
    fontSize: 5
  }
});

export default App;
