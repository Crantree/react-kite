import React from 'react'
import {
    Text,
    Navigator,
    View,
    ToolbarAndroid,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

var KiteFirst = React.createClass({
  navSecond(){
    this.props.navigator.push({
      id: 'second'
    })
  },
  
  render() {
      console.log('first render');
    return (
      <View style={styles.Fcontainer}>
      <Text style={styles.header}>This is first</Text>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        titleColor={'#FFFFFF'}/>
        <TouchableHighlight onPress={this.navSecond}>
          <Text style={styles.header}>Navigate to second screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
   Fcontainer:{
       backgroundColor: '#395925',
       height:200
   },
   toolbar:
   {
       
   }
  ,
  header:{
      color:'#F0F0F0'
  }
});

module.exports = KiteFirst;