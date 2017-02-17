import React, { Component } from 'react';
import TodosList from './todos-list'

const todos = [
	{
		task: 'make React tutorial',
		isCompleted: false,
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
];

class App extends Component {
	render() {
		return (
			<div>
				<h1>React ToDos App updated</h1>
				<TodosList />
			</div>
		)
	}
}

export default App;
