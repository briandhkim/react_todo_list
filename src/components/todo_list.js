import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAll} from '../actions';
import todoData from '../helpers/dummy_data';

class TodoList extends Component {
	componentDidMount(){
		this.props.getAll();
	}

	render(){

		const todoElements = this.props.allTodos.map((todoItem, index) => {
			return <li key={index} className="collection-item">{todoItem.title}</li>
		});
		console.log('list from props', this.props.allTodos);
		return(
			<div>
				<ul className="collection">
					{todoElements}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		allTodos: state.todo.all
	}
}

export default connect(mapStateToProps, {getAll})(TodoList);