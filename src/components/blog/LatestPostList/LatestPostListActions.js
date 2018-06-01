import * as types from './LatestPostListActionTypes';

export const loaded = (response)=>{
	return {
		type    : types.LOADED,
		posts   : response.posts,
		errors  : response.errors,
		loading : false,
	}
}

export const loading = ()=>{
	return {
		type    : types.LOADING,
		loading : true,
	}
}