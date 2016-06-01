import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//var Weather = require('./Weather');
//var KiteTab = require('./Components/KiteTab');
var KiteNav = require('./KiteNav');
var ReactKite = React.createClass(
  {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
         <KiteNav></KiteNav>
        <Text>Footer</Text>
      </View>
    );
  }
});


//<Image source={require('image!hospitalward')} resizeMode='cover' style={styles.backdrop}>
//</Image>
var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'stretch',
      paddingTop: 30,
      //backgroundColor: '#FFFFFF'
    },
    backdrop: {
      flex:1,
      flexDirection:'column'
    }
  }
)

module.exports = ReactKite;