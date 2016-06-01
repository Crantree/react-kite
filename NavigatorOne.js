import React from 'react'
import {
    Text,
    Navigator,
    View
} from 'react-native'

var NavigatorOne = React.createClass({
    render()
    {
       return(
        <Navigator
            initialRoute={{name: 'My First Scene', index: 0}}
            renderScene={(route, navigator) =>
            <Text>Hello world</Text>
            }
        />
        );
    }
});

module.export = NavigatorOne;

