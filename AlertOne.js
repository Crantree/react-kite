
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

var AlertOne = React.createClass(
    {
    render(){
    return(
        <TouchableHighlight
          onPress={() => Alert.alert(
            'Alert Title',
            'blah blah',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with one button</Text>
          </View>
        </TouchableHighlight>
        )
    }
});

module.exports = AlertOne;
