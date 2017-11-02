import types from './types';
import todoData from '../helpers/dummy_data';

export function getAll(){
	
	//Make network request - axios call

	return{
		type: types.GET_ALL,
		payload: todoData
	}
}