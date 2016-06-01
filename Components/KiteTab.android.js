import React, {
  Component,
} from 'react';
import {
  DrawerLayoutAndroid,
  ProgressBarAndroid,
  Text,
} from 'react-native';

var KiteTab = React.createClass({
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid />
        <Text>Navigator</Text>
      </DrawerLayoutAndroid>
    );
  }
});

module.exports =  KiteTab;