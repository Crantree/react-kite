//import React, { Component } from 'react';
import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Forecast = React.createClass(
  {
      render: function()
      {
          return(
            <View>
                <Text style={styles.bigText}>
                {this.props.main}
                </Text>
                <Text styles={styles.mainText}>
                Current Conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                {this.props.temp}C
                </Text>
            </View>  
          );
      }
  });
  
  var styles = StyleSheet.create({
      bigText:{
          flex:2,
          fontSize: 20,
          textAlign: 'center',
          margin:10,
          color:'#FFFFFF'
      },
      mainText:{
          flex: 1,
          fontSize: 16,
          textAlign:'center',
          color:'#FFFFFF'
      }
  })
  
  module.exports = Forecast;