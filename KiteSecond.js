import React from 'react'
import {
    Text,
    Navigator,
    View,
    ToolbarAndroid,
    StyleSheet,
    Image
} from 'react-native'

var KiteSecond = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        navIcon={require('./images/ic_arrow_back_white_24dp.png')}
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#FFFFFF'}/>
        <Text>
          Second screen
        </Text>
      </View>
    );
  }
})

var styles = StyleSheet.create({
   container:{
       
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
   },
   toolbar:
   {
      height: 56,
      backgroundColor: '#e9eaed',
   },
   pic:{
     height:30,
     width:30
   }
});

module.exports = KiteSecond;