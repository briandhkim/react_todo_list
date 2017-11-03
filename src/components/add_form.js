import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


class AddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			details: '',
			complete: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(event){
		const{name, value} =event.target;
		this.state[name] = value;
		this.setState(this.state);
	}

	handleFormSubmit(event){
		event.preventDefault();
		// console.log(this.state);
		this.props.addTodo(this.state);
		this.setState({
			title:'',
			details: '',
			complete: false
		});
	}

	render(){
		const{title, details} = this.state;

		return(
			<form onSubmit={this.handleFormSubmit}>
				<p>new</p>
				<input name="title" placeholder="title" value={title} onChange={this.handleInputChange}/>
				<input name="details" placeholder="details" value={details} onChange={this.handleInputChange}/>
				<button className="btn">aaadddddd</button>
			</form>
		)
	}
}


export default connect(null, {addTodo})(AddForm);