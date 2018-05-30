import * as types from './PostListActionTypes';

export const loaded = (response)=>{
	return {
		type       : types.LOADED,
		posts      : response.posts,
		errors     : response.errors,
		loading    : false,
		pagination : response.pagination,
	}
}

export const loading = ()=>{
	return {
		type    : types.LOADING,
		loading : true,
	}
}