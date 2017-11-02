import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';

const TodoItem = (props) =>{
	const{index, item } = props;
	const handleClick =()=>{
		console.log(index);
		props.deleteTodo(index);
	};

	return(
		<li className="collection-item row">
			<div className="col s10">
				{item.title}
			</div>
			<div className="col s2">
				<button onClick={handleClick} className="btn amber darken-4">delete</button>
			</div>
		</li>
	)
}

export default connect(null, {deleteTodo})(TodoItem);