import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./Components/App/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getDataYear } from './dataApi';

const initialState = {
    data: getDataYear()
}

function todoApp(state = initialState, action) {
    console.log(action);
    if (action.type === 'ADD_TRACK') {
        return {
            ...state,
            data: action.payload,
        };
    }
    return state;
}

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

