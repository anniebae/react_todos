import React, { Component } from 'react';

export class ToDoAppList extends Component {
	constructor() {
		super();
		this.remove = this.remove.bind(this);
	}

	remove(elem) {
		var value = elem.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	}

	render() {
		var items = this.props.tasks.map((elem, i) => {
			return <li key={i}><span>{elem}</span><button onClick={this.remove}>X</button></li>
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