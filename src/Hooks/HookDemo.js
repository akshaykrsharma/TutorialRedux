import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../component/Button';
import { Strings } from 'theme';

function HookDemo() {
	const { mainContainerStyle, containerStyle, textStyle, titleHooksStyle, buttonStyle } = styles;
	const [count, setCount] = useState(0);

	return (
		<View style={mainContainerStyle}>
			<Text style={titleHooksStyle}>{Strings.testingTextHooks}</Text>
			<View style={containerStyle}>
				<Button style={buttonStyle} title={Strings.strIncreaseCount} onPress={() => setCount(count + 1)} />
				<Text style={textStyle}>{count}</Text>
				<Button style={buttonStyle} title={Strings.strDecreaseCount} onPress={() => setCount(count - 1)} />
			</View>
			<Text style={{ fontSize: 16 }}>{Strings.demoText}</Text>
		</View>
	);
}

const styles = {
	mainContainerStyle: {
		padding: 10,
		margin: 20,
		alignItem: 'center',
		justifyContent: 'center',
		backgroundColor: '#90CAF9'
	},
	containerStyle: {
		alignItem: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	titleHooksStyle: {
		fontSize: 16,
		alignSelf: 'center'
	},
	buttonStyle: {
		width: undefined,
		minWidth: 70
	},
	textStyle: {
		paddingHorizontal: 20,
		alignSelf: 'center',
		fontSize: 20
	}
};

export default HookDemo;
