import React, { Component } from 'react';

export class TodoAppList extends Component {
	constructor() {
		super();
	}
	render() {
		// items = this.props.tasks.map(() => return <li>items)
		// get items dynamically from its parent
		return(
			<ul>
				<li>Task 1</li>
				<li>Task 2</li>
			</ul>
		)

	}
}