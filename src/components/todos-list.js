import React, { Component } from 'react'
import TodosListHeader from './todos-list-header'

class TodosList extends Component {
	render() {
		return (
			<table>
				<TodosListHeader />
			</table>
		)
	}
}

export default TodosList