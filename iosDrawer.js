var React = require('react-native');

var styles = require('./style');
var Drawer = require('react-native-drawer');

var ControlPanel = require('./ControlPanel');

var Button = require('./Button');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var Sidebar = React.createClass({
    closeControlPanel: function(){
        this.refs.drawer.close()
    },
    openControlPanel: function(){

        this.refs.drawer.open()
    },
    render: function() {
        return (
            <Drawer
            type="overlay"
            openDrawerOffset={70} 
            panCloseMask={1} 
            styles={{
                drawer: {
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 0,
                }
            }}
            tweenHandler={(ratio) => {
                return {
                    drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
                    main: { opacity:(2-ratio)/2 },
                }
            }}
            content={<ControlPanel />}
            >
            </Drawer>
            )
    }
})
module.exports = Sidebar;