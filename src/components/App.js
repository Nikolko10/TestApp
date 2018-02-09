import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';

class App extends Component {
  showModal(day, time, note) {
    let popUp = document.querySelector('.popUpColl');
    if (popUp.style.display === 'none') {
      popUp.style.display = 'block';
      popUp.setAttribute('data-day', day);
      this.refs.time.value = time;
      this.refs.note.value = note;
    } else {
      popUp.style.display = 'none';
    }
  }

  add(time, note) {
    let popUp = document.querySelector('.popUpColl');
    let day = popUp.getAttribute('data-day');
    this.props.add(day, time, note);
    popUp.style.display = popUp.style.display === 'none' ? 'block' : 'none';
    this.refs.time.value = this.refs.note.value = '';
  }

  popUpCreateColl() {
    return <div style={{display: 'none'}} className="popUpColl">
        <div>
          <p>Enter time</p>
          <input type='text' ref='time' />
          <p>Enter note</p>
          <textarea ref='note' rows='5'></textarea><br/>
            <button className='add' onClick={() => this.add(this.refs.time.value, this.refs.note.value)}>Add</button>
          <button onClick={this.showModal}>Cansel</button>
        </div>
    </div>
  }

  render() {
    if (this.props.store.isLoading === false) {
       return <p>Loading…</p>
    }
    return (
      <div className='calendar'>
        <h3>Февраль</h3>
        <div className='flex'>
          <Header />
        </div>
        <div className='flex_body'>
          <Body modal={(day, time, note) => this.showModal(day, time, note)} />
        </div>
        { this.popUpCreateColl() }
      </div>
    );
  }
}

export default connect(state => ({store: state}), dispatch => {return {
  add: function (day, time, note) {
    dispatch({type: 'ADD', payload: {day, time, note}})
  }
}})(App);
