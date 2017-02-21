import React, { Component } from 'react'

class CreateTodos extends Component {

	render() {

		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do I need to do?" ref="createInput" />
				<button>Create</button>
			</form>
		)
	}

	handleCreate(event) {
		event.preventDefault();

		console.log(this.props.createTask)
	}
}

export default CreateTodos