import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, Alert } from 'react-native';
import Header from '../component/Header';
import Button from '../component/Button';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/userAction';

class LoginForm extends Component {
	state = { isLoading: false };
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress() {
		const { email, password } = this.props;
		this.setState({ isLoading: true });
		this.props.loginUser({ email, password }, (status, response) => {
			this.setState({ isLoading: false });
			if (status) {
				this.props.navigation.navigate('Home');
			} else if (response) {
				Alert.alert(response.error);
			}
		});
	}

	renderEmailText() {
		return (
			<TextInput
				onChangeText={this.onEmailChange.bind(this)}
				value={this.props.email}
				style={styles.textInputStyle}
				placeholder={'Email'}
			/>
		);
	}

	renderPasswordText() {
		return (
			<TextInput
				secureTextEntry={true}
				onChangeText={this.onPasswordChange.bind(this)}
				value={this.props.password}
				style={[styles.textInputStyle]}
				placeholder={'Password'}
			/>
		);
	}

	renderSubmitButton() {
		if (this.state.isLoading) {
			return <ActivityIndicator size="large" color="#0000ff" />;
		}
		return <Button onPress={this.onButtonPress.bind(this)} style={{ margin: 30 }} title={'Submit'} />;
	}

	render() {
		return (
			<View>
				<Header title={'Login'} />
				{this.renderEmailText()}
				{this.renderPasswordText()}
				{this.renderSubmitButton()}
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
	const { email, password, isLoading, error, user } = state;
	return {
		email: email,
		password: password,
		isLoading: isLoading,
		error: error,
		user: user
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, loginUser }
)(LoginForm);
