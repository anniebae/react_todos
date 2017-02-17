import React, { Component } from 'react'
import TodosListHeader from './todos-list-header'

class TodosList extends Component {
	render() {
		console.log(this.props);
		
		return (
			<table>
				<TodosListHeader />
			</table>
		)
	}
}

export default TodosList