import { USER_LIST_SUCCESS } from './../actions/types';
const INITIAL_STATE = { data: '' };

export default (state, action) => {
	switch (action.type) {
		case USER_LIST_SUCCESS:
			return { data: action.payload };
		default:
			return state ? {} : INITIAL_STATE;
	}
};
