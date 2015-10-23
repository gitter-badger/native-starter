var React = require('react-native')
var styles = require('./style');
var bootstrap = require('./bootstrapStyle');

var Button = require('./Button');

var {   
    StyleSheet,
    Text,
    Image,   
    View,
} = React;



var Mail = React.createClass({
	render: function  () {
		return (
			 <View style={styles.bgWrapper}> 
                <Image
                    source={require('image!bg')}
                    style={styles.background} >
                    <View style={styles.transparent}>
                        <Button
                            onPress={this.props.open}
                            text="Open" />
                        <Text style={styles.name}>
                            Kumar Pratik
                        </Text>
                        
                        <Text style={styles.subject}>
                            Join Strap UI Team now
                        </Text>     
                        
                        <Text style={styles.time}>
                            Monday 05, 12:00 PM
                        </Text>
                        
                        <Text style={styles.message}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d o eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor i  n reprehenderit i n voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt i n culpa qui officia deserunt mollit anim id est laborum. Lorem 
                            ipsum dolor sit amet, consectetur adipisicing elit, sed d o eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor i n reprehenderit i n voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt i n culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>                  
                                 
                </Image>
            </View>
		)
		
	}
});

module.exports = Mail;