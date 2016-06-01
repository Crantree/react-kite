import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Weather = require('./Weather');
var KiteTab = require('./Components/KiteTab');

var ReactKite = React.createClass(
  {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Image source={require('image!hospitalward')} resizeMode='cover' style={styles.backdrop}>
          <Weather></Weather>
        </Image>
      </View>
    );
  }
});

var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 30
    },
    backdrop: {
      flex:1,
      flexDirection:'column'
    }
  }
)

module.exports = ReactKite;