var React = require('react-native');

var styles = require('./App/Styles/style');
var bootstrap = require('./bootstrapStyle');
var Login = require('./App/Components/Login');
var Mail = require('./App/Components/Mail');
var AppDispatcher = require('./App/Dispatcher/AppDispatcher');
var Button = require('./App/Components/Button');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Navigator,
    View,
} = React;



var MainView = React.createClass({
    componentDidMount: function(){
        var that =this;
        AppDispatcher.register(function(payload){
        console.log(payload, 'msg');
        switch (payload.actionType) {
            case 'navigate':
                that.refs.navigator.push(
                {
                component: payload.component
            })
        break;
      }
      });
        console.log(AppDispatcher);
    },
    render: function() {
        return (
                <Navigator
                    ref='navigator'
                    open={ this.props.open }
                    initialRoute={{name: 'Login', component: Login}}
                    // navigationBar={}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        console.log(route); 

                        if (route.component) {
                            return React.createElement(route.component, { navigator });
                        }
                    }}
            />
        );
    }
});


module.exports = MainView;