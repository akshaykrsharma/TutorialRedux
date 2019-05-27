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

	searchLogic(item, text) {
		///Default Search according to whole values in JSON (whatever its first name, last name , etc.)
		let defaultSearchedValue = '';
		Object.keys(item).map(key => {
			defaultSearchedValue += item[key];
		});
		return defaultSearchedValue.toLowerCase().includes(text.toLowerCase());
	}

	getDataForList() {
		const text = this.state.searchedText;
		if (!!text) {
			//filterData
			return this.props.data.filter(item =>
				!!this.props.searchLogic ? this.props.searchLogic(item, text) : this.searchLogic(item, text)
			);
		} else {
			return this.props.data;
		}
	}

	render() {
		return (
			<View style={Utils.styleMerger(styles.container, this.props.style)}>
				{this.props.showSearch && (
					<View style={{ height: 60, width: '100%', padding: 10, backgroundColor: '#d0d0d0' }}>
						<TextInput
							style={{ height: '100%', width: '100%', paddingHorizontal: 10, backgroundColor: '#FFF', borderRadius: 5 }}
							onChangeText={text => {
								this.setState({ searchedText: text });
							}}
							placeholder={'Search'}
						/>
					</View>
				)}
				{this.getDataForList() && this.getDataForList().length == 0 && this.renderNoDta()}
				{!!this.state.data && (
					<FlatList
						style={{ width: '100%', paddingHorizontal: 20 }}
						data={this.getDataForList()}
						renderItem={this.props.renderItem}
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
