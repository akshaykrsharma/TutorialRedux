import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import Header from '../component/Header';
import Button from '../component/Button';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import HookDemo from '../Hooks/HookDemo';

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

	componentWillReceiveProps(props) {
		console.warn('Next props=', JSON.stringify(props.user));
		console.warn('props=', JSON.stringify(this.props.user));
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
				style={[styles.textInputStyle]}
				placeholder={'Password'}
			/>
		);
	}

	renderSubmitButton() {
		if (this.props.isLoading) {
			return <ActivityIndicator size="large" color="#0000ff" />;
		}
		return <Button onPress={this.onButtonPress.bind(this)} style={{ margin: 30 }} title={'Submit'} />;
	}

	render() {
		return (
			<View>
				<Header title={'HEADING'} />
				{this.renderEmailText()}
				{this.renderPasswordText()}
				{this.renderSubmitButton()}
				<HookDemo />
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
	console.log('mapToProps State=', JSON.stringify(state.AuthReducer));
	const { email, password, isLoading, error } = state.AuthReducer;
	return {
		email: email,
		password: password,
		isLoading: isLoading,
		error: error
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, loginUser }
)(LoginForm);
