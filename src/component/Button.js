import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Styles } from 'theme';
import Utils from '../Utility/Utils';

function Button(props) {
	return (
		<TouchableOpacity style={Utils.styleMerger(Styles.button, props.style)} onPress={props.onPress}>
			{props.children ? (
				props.children
			) : (
				<Text style={Utils.styleMerger(Styles.buttonTitleStyle, props.textStyle)}>{props.title}</Text>
			)}
		</TouchableOpacity>
	);
}

export default Button;
