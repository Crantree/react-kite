import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var ButtonOne = React.createClass(
  {
  getInitialState()
  {
    return ({
      pressing: false
    });
  },
 
  _onPressIn(event)
  {
    this.setState({pressing: true})    
  },
  
  _onPressOut(event)
  {
    this.setState({pressing: false})    
  },
  
  render() {
    return (
    <View style={styles.container}>
        <TouchableHighlight
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}
        style={styles.touchable}>
            <View style={styles.button}>
            <Text style={styles.welcome}>
            {this.state.pressing ? 'Down' : 'Up'}
            </Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create(
  {
    container: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome:
    {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    touchable:{
      borderRadius:100
    },
    button:
    {
      backgroundColor: '#FF0000',
      borderRadius: 100,
      height: 200,
      width: 200,
      justifyContent: 'center'
    }
  }
)

module.exports = ButtonOne;