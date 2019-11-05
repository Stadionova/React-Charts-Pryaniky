import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./Components/App/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getDataYear, getDataAppear, getDataDie, getDataYearaway } from './getFunctionPeriod';

const initialState = {
    data: getDataYear(),
    appear: getDataAppear(),
    die: getDataDie(),
    away: getDataYearaway()
}

function changeChartByPeriod(state = initialState, action) {
    if (action.type === 'changePeriod') {
        return {
            ...state,
            data: action.payload
        };
    }

    if (action.type === 'appear') {
        return {
            ...state,
            appear: action.payload
        };
    }

    if (action.type === 'die') {
        return {
            ...state,
            die: action.payload
        };
    }

    if (action.type === 'away') {
        return {
            ...state,
            away: action.payload
        };
    }
    return state;
}

const store = createStore(changeChartByPeriod);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

