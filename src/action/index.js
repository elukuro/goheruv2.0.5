import axios from 'axios';

export const LANDINGPAGE_FETCH="LANDINGPAGE_FETCH";
export const ABOUT_FETCH="ABOUT_FETCH";

const MAIN_URL="http://goheru.com/public/";

export function fetchLandingpage(){
	const request=axios.get(`${MAIN_URL}landingpageJson`);
	return{
		type:LANDINGPAGE_FETCH,
		payload:request
	}
}

export function fetchAbout(){
	const request2=axios.get(`${MAIN_URL}aboutJson`);
	return{
		type:ABOUT_FETCH,
		payload:request2
	}
}
