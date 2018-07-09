import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';
import App from './AppContainer';
import characters from "./characters";

import './index.css';

const app = combineReducers({characters});

const store = createStore(app, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
