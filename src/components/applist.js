import React, { Component } from 'react';

export class ToDoAppList extends Component {
	constructor() {
		super();
	}
	render() {
		var items = this.props.tasks.map((elem, i) => {
			return <li key={i}>{elem}</li>
		});
		// items = this.props.tasks.map(() => return <li>items)
		// get items dynamically from its parent
		return(
			<ul>
				{items}
			</ul>
		)

	}
}