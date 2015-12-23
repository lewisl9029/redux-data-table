'use strict';

import 'normalize.css';
import 'skeleton-css-webpack';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './app.css';
import state from './reducers/state';
import App from './containers/app';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	loggerMiddleware
)(createStore);

let store = createStoreWithMiddleware(state);

let app = document.getElementById('app');

render(
	<Provider store={store}>
    <App />
  </Provider>,
  app
);