import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'theme';
import { connect } from 'react-redux';
import { setUser } from './actions/userAction';
import Utils from './Utility/Utils';
import Strings from './res/theme/Strings';

class Splash extends Component {
	constructor(props) {
		super(props);

		setTimeout(() => {
			Utils._retrieveData('userData', val => {
				let userData = '';
				if (!!val) userData = JSON.parse(val);
				console.warn('userData.token=', userData.token);
				if (!!userData.token) {
					this.props.setUser(userData);
					this.props.navigation.navigate('Home');
				} else {
					this.props.navigation.navigate('LoginForm');
				}
			});
		}, 3000);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}>{Strings.splash}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: Colors.buttonBackgroundRed
	},
	textStyle: {
		fontSize: 50,
		color: Colors.WHITE_COLOR
	}
});

export default connect(
	null,
	{ setUser }
)(Splash);
