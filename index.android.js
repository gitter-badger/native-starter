/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var styles = require('./style');
var Drawer = require('./androidDrawer');
var bootstrap = require('./bootstrapStyle');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var AwesomeProject = React.createClass({
    render: function() {
        return (
            <View>
                
                <Text style={styles.welcome}>
                Android here.
                </Text>
                <Text style={styles.instructions}>
                To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                Shake or press menu button for dev menu
                </Text>
                </View>
            );
    }
});



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
