import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Utils from './Utils';

import { Styles } from 'theme';

class Button extends Component {
	render() {
		return (
			<TouchableOpacity style={Utils.styleMerger(Styles.button, this.props.style)} onPress={this.props.onPress}>
				{this.props.children ? (
					this.props.children
				) : (
					<Text style={Utils.styleMerger(Styles.buttonTitleStyle, this.props.textStyle)}>{this.props.title}</Text>
				)}
			</TouchableOpacity>
		);
	}
}

export default Button;
