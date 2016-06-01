import React from 'react'
import {
    Text,
    Navigator,
    View,
    StyleSheet
} from 'react-native'

var KiteFirst = require('./KiteFirst');
var KiteSecond = require('./KiteSecond');

var KiteNav = React.createClass({
  
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        {console.log('first');
        return (<KiteFirst navigator={navigator} title="first"/>);
        //return (<Text>First</Text>);
        }
      case 'second':
        {console.log('second');
        return (<KiteSecond navigator={navigator} title="second" />);
        }
    }
  },
  
  render() {
    return (
      <View style={styles.Ncontainer}>
        <Text>navigation</Text>
        <Navigator
          initialRoute={{id: 'first'}}
          renderScene={this.navigatorRenderScene}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
    Ncontainer:{
      flex:1,
      //height:400,
      alignItems: 'stretch',
        //backgroundColor: '#FF0000'
    }
})

module.exports = KiteNav;