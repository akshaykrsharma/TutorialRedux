import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Header from '../component/Header';
import Button from '../component/Button';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	render() {
		return (
			<View>
				<Header title={'HEADING'} />
				<TextInput
					onChangeText={this.onEmailChange.bind(this)}
					value={this.props.email}
					style={styles.textInputStyle}
					placeholder={'Email'}
				/>
				<TextInput
					secureTextEntry={true}
					onChangeText={this.onPasswordChange.bind(this)}
					style={[styles.textInputStyle]}
					placeholder={'Password'}
				/>

				<Button onPress={this.onButtonPress.bind(this)} style={{ margin: 30 }} title={'Submit'} />
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
	{ emailChanged, passwordChanged, loginUser }
)(LoginForm);
