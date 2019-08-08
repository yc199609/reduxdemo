import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const store = createStore(reducer,composeWithDevTools())

ReactDOM.render(
    <div>
        <Provider store={ store }>
            <App />
        </Provider>
    </div>
, document.getElementById('root'));

