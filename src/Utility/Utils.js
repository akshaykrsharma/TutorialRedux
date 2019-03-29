import { Dimensions, Platform } from 'react-native';
const { height } = Dimensions.get('window');
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Utils {
	static styleMerger(...styles) {
		return Object.assign({}, ...styles);
	}

	static isIphoneX() {
		return Platform.OS === 'ios' && (height == 812 || height == 896);
	}

	static getStatusBarHeight() {
		return Platform.OS === 'ios' ? (Utils.isIphoneX() ? 44 : 20) : 0;
	}

	static isComponent(comp) {
		return typeof comp == 'object';
	}

	static _retrieveData = async (key, cb) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
				cb(value);
			} else {
				cb(null);
			}
		} catch (error) {
			// Error retrieving data
		}
	};

	static _storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			// Error saving data
		}
	};
}
