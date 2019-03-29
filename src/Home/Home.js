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

	renderListCell({ item }) {
		return (
			<View
				style={{
					flexDirection: 'row',
					marginVertical: 10,
					backgroundColor: 'rgba(0,0,0,0.1)',
					borderRadius: 8,
					shadowRadius: 5,
					shadowWidth: 2,
					shadowOpacity: 0.2
				}}
			>
				<Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: item.avatar }} />
				<View style={{ marginHorizontal: 10, justifyContent: 'center' }}>
					<Text style={{ fontSize: 20 }}>{item.first_name}</Text>
					<Text style={{ fontSize: 16 }}>{item.last_name}</Text>
				</View>
			</View>
		);
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
				{/* <HookDemo /> */}
				<List
					searchLogic={(item, text) => item.last_name.toLowerCase().includes(text.toLowerCase())}
					showSearch={true}
					data={this.state.userList.data}
					renderItem={this.renderListCell.bind(this)}
				/>
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
