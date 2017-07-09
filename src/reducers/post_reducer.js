import {LANDINGPAGE_FETCH} from '../action/index';
import _ from 'lodash';
export default function(state={},action){

	switch(action.type){
		case LANDINGPAGE_FETCH:
			return action.payload.data;
		default:
		return false
	}

}