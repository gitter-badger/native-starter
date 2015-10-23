var React = require('react-native')
var styles = require('./style');

var {
    View,
    Text,
    TouchableHighlight
} = React

var Name = React.createClass({
    
    render: function(){
        return(
            <Text style={styles.subject}>
                Join Strap UI Team now
            </Text>            
        )
    }
})

module.exports = Name;