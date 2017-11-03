import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, toggleTodo} from '../actions';


const TodoItem = (props) =>{
	const{index, item } = props;
	const handleClick =()=>{
		console.log(index);
		props.deleteTodo(index);
	};
	const toggleComplete = () =>{
		console.log('Toggle complete at index', index);
		props.toggleTodo(index);
		// console.log(props.toggleTodo(index));
		// console.log(item);
	}

	return(
		<li className="collection-item row">
			<div className="col s8">
				{item.title}
			</div>
			<div className="col s2">
				<button onClick={toggleComplete} className={`btn ${item.complete ? 'cyan accent-2' : 'red accent-4'}`}>
					{item.complete ? 'Revert' : 'Complete'}
				</button>
			</div>
			<div className="col s2">
				<button onClick={handleClick} className="btn amber darken-4">delete</button>
			</div>
		</li>
	)
}

export default connect(null, {deleteTodo, toggleTodo})(TodoItem);