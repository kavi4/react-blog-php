import * as types from './TagCloudActionTypes';

export const loaded = (response)=>{
	return {
		type       : types.LOADED,
		tags       : response.tags,
		errors     : response.errors,
		loading    : false,
	}
}

export const loading = ()=>{
	return {
		type    : types.LOADING,
		loading : true,
	}
}