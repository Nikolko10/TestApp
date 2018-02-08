import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer/';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { saveState } from './localStorage/localStorage.js';
 
import './style/index.css';

var store = createStore(reducer, composeWithDevTools());

store.subscribe(() => {
	saveState(store.getState())
});

store.dispatch({type: 'LOAD', payload: store.getState()});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();