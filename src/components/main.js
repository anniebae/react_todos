import React, { Component } from 'react'
import {AddNewTask} from './addtask'
import {TodoAppList} from './applist'

export class Todo extends Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div>
				<h1>Todo App</h1>
				<AddNewTask />
				<TodoAppList />
			</div>
		)
	}
}