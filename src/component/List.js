import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, TextInput, Image } from 'react-native';
import Utils from '../Utility/Utils';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], noData: false, searchedText: '' };
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ data: nextProps.data });
	}

	renderNoDta() {
		return <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>No Data Found</Text>;
	}

	render() {
		return (
			<View style={Utils.styleMerger(styles.container, this.props.style)}>
				{this.props.showSearch && (
					<View style={{ height: 60, width: '100%', padding: 10, backgroundColor: '#d0d0d0' }}>
						<TextInput
							style={{ height: '100%', width: '100%', paddingHorizontal: 10, backgroundColor: '#FFF', borderRadius: 5 }}
							onChangeText={text => {
								if (!!text && text.length > 0) {
									const arr = this.props.data.filter(item =>
										item.first_name.toLowerCase().includes(text.toLowerCase())
									);

									this.setState({ data: arr, noData: arr.length == 0 });
								} else {
									this.setState({ data: this.props.data, noData: false });
								}
							}}
							placeholder={'Search'}
						/>
					</View>
				)}
				{this.state.noData && this.renderNoDta()}
				{!!this.state.data && (
					<FlatList
						style={{ width: '100%', paddingHorizontal: 20 }}
						data={this.state.data}
						renderItem={({ item }) => (
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
						)}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%'
	}
});
