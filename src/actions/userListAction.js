import APIManager from '../Networking/ApiManager';
import { USER_LIST_SUCCESS } from './types';

export const userList = (page, cb) => {
	return dispatch => {
		APIManager.getResponse('/api/users', 'GET', { page: page }, (status, response) => {
			cb(status, response);
			if (status) {
				dispatch({
					type: USER_LIST_SUCCESS,
					payload: response
				});
			}
		});
	};
};
