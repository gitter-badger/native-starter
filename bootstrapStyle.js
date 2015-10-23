var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;
    
var primary = '#5260E8';
var success = '#3ECF36';
var warning = '#E8CD7C';
var info = '#C56EE8';
var danger = '#E84E5B';

var bootstrap = StyleSheet.create({
    
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: 'right',
    },
    textCenter: {
        textAlign: 'center',
    },
    textJustify: {
        textAlign: 'justify',
    },
    textPrimary: {
        color: primary,
    },
    textSuccess: {
        color: success,
    },
    textWarning: {
        color: warning,
    },
    textDanger: {
        color: danger,
    },
    bgPrimary: {
        color: '#fff',
        backgroundColor: primary,
    },
    col6: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '100',
    },
    col5: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '83.33333333',
    },
    col4: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '66.66666667',
    },
    col3: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '50',
    },
    col2: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '33.33333333',
    },
    col1: {
        position: 'relative',
        alignItems: 'flex-start',
        // percentWidth: '16.66666667',
    },
    
});

module.exports= bootstrap;