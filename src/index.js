import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import App from './AppContainer';
import characters from './characters';
import {fetchCharacters} from "./action"

// import thunk from "redux-thunk";
// import {HelloSaga} from './saga';
// import {fetchCharacters} from "./action-using-thunk";

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const app = combineReducers({characters});

// const store = createStore(app, applyMiddleware(thunk));

const store = createStore(app, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchCharacters);

/*----just hello saga -----*/
// sagaMiddleware.run(HelloSaga);
// const action = type => store.dispatch(type);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
