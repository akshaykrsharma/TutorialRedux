import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';
import Utils from '../Utility/Utils';
import HookDemo from '../Hooks/HookDemo';
import { userList } from '../actions/userListAction';
import List from '../component/List';

let userData;

class Home extends Component {
	constructor() {
		super();
		this.state = { userList: [] };
	}

	componentDidMount() {
		this.props.userList(1, (status, response) => {
			if (status) {
				console.warn('api calling 1', response);
				this.setState({ userList: response });
			}
		});
	}

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
						this.props.navigation.navigate('LoginForm');
					}}
				/>
				{this.props.user && <Text style={styles.textStyle}>{this.props.user.token}</Text>}
				<HookDemo />
				<List showSearch={true} data={this.state.userList.data} />
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
		fontSize: 20,
		padding: 10
	}
});

const mapStateToProps = state => {
	const user = !!userData ? userData : state.user;
	return {
		user: user
	};
};

export default connect(
	mapStateToProps,
	{ userList }
)(Home);
