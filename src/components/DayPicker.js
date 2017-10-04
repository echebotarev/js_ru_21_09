import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import List from './List';

import 'react-day-picker/lib/style.css';

export default class Calendar extends Component {
	state = {
		selectedDays: [],
	};

	render() {
		return (
			<div>
				<DayPicker
					selectedDays={this.state.selectedDays}
					onDayClick={this.handleDayClick}
				/>
				<List list={this.state.selectedDays}/>
			</div>
		);
	}

	handleDayClick = (day, { selected }) => {
		const { selectedDays } = this.state;
		if (selected) {
			const selectedIndex = selectedDays.findIndex(selectedDay =>
				DateUtils.isSameDay(selectedDay, day)
			);
			selectedDays.splice(selectedIndex, 1);
		} else {
			selectedDays.push(day);
		}
		this.setState({ selectedDays });

		console.log(this.state.selectedDays);
	};
}