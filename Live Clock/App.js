import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import LiveClock from './components/Function';

import {Card} from 'react-native-paper';

export default class App extends React.Component {
  
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Live Clock
      </Text>
      <Card style={{height:100, width:500}}>
      <Text style={styles.timer}>
        <LiveClock />
      </Text>
      </Card>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fdf3f9', //#ecf0f1 old color
    padding: 8,
    color:"red"
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"red"
  },
  timer:{
    padding:20,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold"
  }
});