import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Pessoas from './src/Pessoas'


export default function App(){
  return(
    <View style={styles.cointainer}>

      <View style={styles.saud}>
        <Text style={styles.txt}>Sejá bem vindo!</Text>
      </View>
      
      <View style={styles.main}>
            <Pessoas/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cointainer:{
    flex: 1,
  },
  saud:{
    alignItems: 'center',
    margin: 15
  },
  txt:{
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center'
  },
  main:{
    backgroundColor: '#241e4e',
    padding: 45,
  },
  txtMain:{
    color: '#fff',
    fontSize: 25,
    alignItems: 'center',
    margin: 10
  }
})