import types from '../actions/types';

const DEFAULT_STATE = {all:[]};

export default (state=DEFAULT_STATE, action) =>{
	switch(action.type){
		case types.GET_ALL:
			return {all: action.payload};
		case types.ADD_TODO:
			console.log(action);
			return {all: [action.payload, ...state.all] };
		case types.DELETE_TODO:
			let newState = state.all.slice();
			console.log(newState);
			newState.splice(action.payload,1);
			return {all: newState};
		case types.TOGGLE_TODO:
			newState = state.all.slice();
			newState[action.payload].complete = !newState[action.payload].complete;
			console.log(newState);
			return {all: newState};
		default:
			return state;
	}
}