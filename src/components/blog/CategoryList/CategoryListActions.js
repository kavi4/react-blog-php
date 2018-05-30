import * as types from './CategoryListActionTypes';

export const loaded = (response)=>{
	return {
		type       : types.LOADED,
		categoryes : response.categoryes,
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