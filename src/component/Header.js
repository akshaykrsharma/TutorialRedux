import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Utils from './Utils';
import { Colors, Fonts } from 'theme';

export default class Header extends Component {
	onLeftPress = () => {
		this.props.onLeftPress();
	};

	renderLeftButton() {
		return (
			this.props.leftButton && (
				<TouchableOpacity onPress={this.props.onLeftPress}>
					{Utils.isComponent(this.props.leftButton) ? (
						this.props.leftButton
					) : (
						<Text style={styles.leftTextStyle}>{this.props.leftButton}</Text>
					)}
				</TouchableOpacity>
			)
		);
	}

	renderRightButton() {
		return (
			this.props.rightButton && (
				<TouchableOpacity onPress={this.props.onRightPress}>
					{Utils.isComponent(this.props.rightButton) ? (
						this.props.rightButton
					) : (
						<Text style={styles.leftTextStyle}>{this.props.rightButton}</Text>
					)}
				</TouchableOpacity>
			)
		);
	}

	renderTitle() {
		return (
			this.props.title &&
			(Utils.isComponent(this.props.title) ? (
				this.props.title
			) : (
				<Text style={Utils.styleMerger(styles.headerTextStyle, this.props.textStyle)}> {this.props.title} </Text>
			))
		);
	}

	render() {
		return (
			<View style={Utils.styleMerger(styles.headerStyle, this.props.style)}>
				{this.renderLeftButton()}
				<View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>{this.renderTitle()}</View>
				<View>{this.renderRightButton()}</View>
			</View>
		);
	}
}

const styles = {
	headerStyle: {
		alignContent: 'center',
		flexDirection: 'row',
		padding: 10,
		width: '100%',
		backgroundColor: Colors.GREEN_COLOR,
		height: Utils.isIphoneX() ? 88 : 64,
		paddingTop: Utils.getStatusBarHeight(),
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	headerTextStyle: {
		color: 'white',
		...Fonts.boldFont(16)
	},
	leftStyle: {},
	leftTextStyle: {
		color: 'white'
	}
};
