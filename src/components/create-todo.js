import React, { Component } from 'react'

class CreateTodo extends Component {
	render() {
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do I need to do?" ref="createInput" />
				<button>Cte</button>
			</form>
		)
	}

	handleCreate(event) {
		event.preventDefault();
		
		this.props.createTask(this.refs.createInput.value);
		this.refs.createInput.value = '';
	}

}

export default CreateTodo