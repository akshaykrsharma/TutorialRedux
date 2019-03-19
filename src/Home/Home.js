import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Header
					leftButton={'◀ '}
					title={'Home'}
					onLeftPress={() => {
						this.props.navigation.goBack();
					}}
				/>
				{this.props.user && <Text style={styles.textStyle}>{this.props.user.token}</Text>}
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
	console.warn('state=', state);

	return {
		user: user
	};
};

export default connect(
	mapStateToProps,
	null
)(Home);
