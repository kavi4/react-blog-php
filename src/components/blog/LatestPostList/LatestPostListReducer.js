import * as types from './LatestPostListActionTypes';

const LatestPostListReducer = (state = {posts :[],errors:[],loading:false,},action)=>
{
	switch(action.type)
	{
		case types.LOADED:{
			let newState = {
				posts : action.posts,
				errors     : action.errors,
				loading    : action.loading,
			};
			return newState;
		}

		case types.LOADING:{

			let newState = {
				posts : [],
				errors     : [],
				loading    : action.loading,
			}
			return newState;
		}

		default:return state;
	}
}

export default LatestPostListReducer;