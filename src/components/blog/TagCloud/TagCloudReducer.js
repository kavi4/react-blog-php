import * as types from './TagCloudActionTypes';

const TagCloudReducer = (state = {tags :[],errors:[],loading:false},action)=>
{
	switch(action.type)
	{
		case types.LOADED:{
			let newState = {
				tags    : action.tags,
				errors  : action.errors,
				loading : action.loading,
			};
			return newState;
		}

		case types.LOADING:{
			let newState = {
				tags     : [],
				errors   : [],
				loading  : action.loading,
				thisPage : state.page,

			}
			return newState;
		}

		default:return state;
	}
}

export default TagCloudReducer;