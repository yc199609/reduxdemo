import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { PersistGate } from 'redux-persist/integration/react'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import reducer from './reducers'; 

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['count'],
    // whitelist: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,composeWithDevTools())
let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));
