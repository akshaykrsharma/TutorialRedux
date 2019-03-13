import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from '../component/Header';
import Button from '../component/Button';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	render() {
		return (
			<View>
				<Header title={'HEADING'} />
				<Text>Hello!</Text>
				<TextInput
					onChangeText={this.onEmailChange.bind(this)}
					value={this.props.email}
					style={styles.textInputStyle}
					placeholder={'Email'}
				/>
				<TextInput
					onChangeText={this.onPasswordChange.bind(this)}
					style={[styles.textInputStyle]}
					placeholder={'Password'}
				/>

				<Button onPress={() => {}} style={{ margin: 30 }} title={'hello'} />
			</View>
		);
	}
}

const styles = {
	textInputStyle: {
		minHeight: 40,
		backgroundColor: 'white',
		marginTop: 10,
		marginHorizontal: 30
	}
};

const mapStateToProps = state => {
	console.log('mapToProps State=', JSON.stringify(state));
	return {
		email: state.AuthReducer.email,
		password: state.AuthReducer.password
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged }
)(LoginForm);
