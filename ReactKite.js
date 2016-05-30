import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var ReactKite = React.createClass(
  {
  getInitialState()
  {
    return ({
      zip: ''
    });
  },
  
  _handleTextChange(event){
    console.log(event.nativeEvent.text); 
    
    this.setState({
      zip: event.nativeEvent.text 
    });
  },
  
  render() {
    return (
      <View>
        <Text>You input {this.state.zip}</Text>
        <TextInput onSubmitEditing={this._handleTextChange} />
      </View>
    );
  }
});

module.exports = ReactKite;