/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	textInput: {
		height: 40, 
		borderColor: 'rgba(255, 255, 255, 0.4)',
		borderWidth: 2,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		margin: 15,
		marginTop: 5,
		backgroundColor: 'transparent',
		color: '#fff',
		paddingLeft: 10,
	},
	bg : {
		backgroundColor: '#475577',
		flex: 1,
		justifyContent: 'center',

	},
	loginLogo: {
		width: 100,
	},
	background: {
        flex: 1,
        resizeMode: 'stretch'
    },
	
});
