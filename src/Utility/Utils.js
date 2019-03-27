// import { AsyncStorage } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class Utils {
	static _retrieveData = async (key, cb) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
				console.warn('value', value);
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
