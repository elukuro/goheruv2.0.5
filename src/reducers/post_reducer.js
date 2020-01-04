import {LANDINGPAGE_FETCH} from '../action/index';

// eslint-disable-next-line no-unused-vars
export default function(state={},action){

	switch(action.type){
		case LANDINGPAGE_FETCH:
			return action.payload.data;
		default:
		return false
	}

}
