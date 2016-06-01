import React, {
  Component,
} from 'react';
import {
  TabBarIOS,
  Navigator,
  Text
} from 'react-native';

var KiteTab = React.createClass({
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="React Native" selected={true}>
            <Navigator>
            </Navigator>
            <Text>Hello world</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

module.exports =  KiteTab;