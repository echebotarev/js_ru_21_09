import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
	static propTypes = {
		list: PropTypes.array.isRequired
	};

	render() {
		const {list} = this.props;

		const body = list.length ? (
			<ul>
				{list.map(li => <li key={new Date(li).getTime()}>{li.toString()}</li>)
				}
			</ul>
		) : <h3>Select the Date</h3>;

		return (
			<div>
				{body}
			</div>
		)
	}
}