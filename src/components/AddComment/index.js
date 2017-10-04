import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class AddComment extends Component {
	state = {
		username: '',
		comment: '',
		usernameError: false,
		commentError: false
	};
	static propTypes = {};

	render() {
		const {username, comment, usernameError, commentError} = this.state;

		return (
			<div>
				User: <input className={usernameError ? 'error' : null} type = 'text' value = {username} onChange = {this.validate.bind(this, 'username')}/>
				Comment: <input className={commentError ? 'error' : null} type = 'text' value = {comment} onChange = {this.validate.bind(this, 'comment')}/>
				<input type="button" value='submit' onClick={this.submit}/>
			</div>
		)
	}

	validate = (input, ev) => {
		console.log(ev.target.value.length);
		const errState = {};
		errState[input + 'Error'] = (ev.target.value.length < 10 || ev.target.value.length > 50) ? true : false;

		const dataState = {};
		dataState[input] = ev.target.value;

		this.setState(Object.assign(dataState, errState))
	};
	submit = () => {
		const {usernameError, commentError} = this.state;
		if (usernameError || commentError) return;

		this.setState({
			username: '',
			comment: ''
		})
	}
}