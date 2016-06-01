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
        <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    );
  }
});

var styles = StyleSheet.create({
    container:
    {
        borderColor:'#0000FF',
        backgroundColor:'#55FFFF',
    },
    row:{
        fontSize: 20,
        backgroundColor:'#FFFFFF',
        color: '#000000'
    }
});

module.exports = ListOne;
