import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class LiveClock extends React.Component {
  constructor(){
    super();
    this.state = {currentTime : new Date()}
  }

  componentDidMount(){
    setInterval(()=> this.tick(), 1000) //tick() is called after every 1 sec or 1000ms
  }

  tick=()=>{
    this.setState({currentTime:new Date()})
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       {this.state.currentTime.toLocaleTimeString('en-US')}
      </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
