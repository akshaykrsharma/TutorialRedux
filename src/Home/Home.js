import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';
import Utils from '../Utility/Utils';
import Button from '../component/Button';
import HookDemo from '../Hooks/HookDemo';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header
					title={'Home'}
					leftButton={'◀ '}
					onLeftPress={() => {
						this.props.navigation.goBack();
					}}
					rightButton={'Logout'}
					onRightPress={() => {
						Utils._storeData('userData', '');
						this.props.navigation.goBack();
					}}
				/>
				{this.props.user && <Text style={styles.textStyle}>{this.props.user.token}</Text>}
				<HookDemo />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle: {
		fontSize: 20
	}
});

const mapStateToProps = state => {
	const user = state.user;
	return {
		user: user
	};
};

export default connect(
	mapStateToProps,
	null
)(Home);
