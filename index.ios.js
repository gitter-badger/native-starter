/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var styles = require('./App/Styles/style');
var bootstrap = require('./bootstrapStyle');
var MainView = require('./mainview');
var ControlPanel = require('./App/Components/ControlPanel');
var NavigationBar = require('react-native-navbar');
var AppDispatcher = require('./App/Dispatcher/AppDispatcher');
var Button = require('./App/Components/Button');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var Drawer = require('react-native-drawer')

var AwesomeProject = React.createClass({

    closeControlPanel: function(){
        this.refs.drawer.close()
    },

    openControlPanel: function(){
        this.refs.drawer.open()
    },
    componentDidMount: function(){
        var that =this;
        AppDispatcher.register(function(payload){
        console.log(payload, 'msg');
        switch (payload.actionType) {
        case 'navigate':
                that.closeControlPanel();
        break;
      }
      });
        console.log(AppDispatcher);
    },

    render: function() {

        return (
            <Drawer
            ref="drawer"
            type="overlay"
            openDrawerOffset={50} 
            panCloseMask={1} 
            styles={{
                drawer: {
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 0,                    
                    backgroundColor: '#7ACECC'
                }
            }}
            tweenHandler={(ratio) => {
                return {
                    drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
                    main: { opacity:(2-ratio)/2 },
                }
            }}
            content={ <ControlPanel close=
                { this.closeControlPanel }/> }
            >
                <MainView open={ this.openControlPanel }/>
            </Drawer>
            )
    }
})







AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

