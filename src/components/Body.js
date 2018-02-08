import React from 'react';
import { connect } from 'react-redux';

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.showModal = this.showModal.bind(this);
		this.addNote = this.addNote.bind(this);
	}

	showModal(day, time, note) {
		this.props.modal(day, time, note);
	}

	addNote(day) {
		this.props.add(day)
	}

	render() {
		return this.props.store.items.map((item, i) => {
			if (item.num === '') {
				return <div key={i} className='noHover'>{item.num}</div>
			} else {
				return <div key={i} onClick={() => this.showModal(item.num, item.time, item.note)}>
					<span>{item.num}</span>
					<p className='time'><strong>{item.time}</strong></p>
					<p className='note'>{item.note}</p>
				</div>
			}
		})
	}
};

export default connect(state => ({store: state}), dispatch => {return {}})(Body);