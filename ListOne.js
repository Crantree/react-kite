import React from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

var ListOne = React.createClass({
    
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        console.log('hello world');
        return {
        dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie'])
        };
    },
    
    render: function() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    );
  }
});

var styles = StyleSheet.create({
    row:{
        fontSize: 20,
        backgroundColor:'#55FFFF',
        color: '#000000'
    }
});

module.exports = ListOne;
