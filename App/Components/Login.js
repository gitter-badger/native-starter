/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');
var login = require('../Styles/login');
var ButtonRounded = require('./ButtonRounded');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} = React;

var Login = React.createClass({
     signup(){
        var Home = require('./Home');
        AppDispatcher.dispatch({
        actionType: 'navigate',
        component: Home

    });
       
    },
  	render: function() {
    return (
    	<View  style={login.bg}> 
            <Text style={styles.logo}>
                StartReact.com
            </Text>   
            <Text style={styles.desc}>
                React Native Starter Kit
            </Text>     
	    	<TextInput
		    	style={login.textInput}
		    	placeholder={'EMAIL'}
		    	placeholderTextColor={'rgba(255, 255, 255, 0.7'}			/>
			<TextInput
             style={login.textInput}
             placeholder={'PASSWORD'}
             secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7'}			/>
		  	<ButtonRounded
			onPress={this.signup}
			text="Login" />   

		</View>
    );
  }
});



module.exports = Login;
