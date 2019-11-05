import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./Components/App/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getDataComeYear, getDataBornYear, getDataDieYear, getDataLeaveYear } from './getFunctionPeriod';

const initialState = {
    dataCome: getDataComeYear(),
    dataBorn: getDataBornYear(),
    dataDie: getDataDieYear(),
    dataLeave: getDataLeaveYear()
}

function changeChartByPeriod(state = initialState, action) {
    if (action.type === 'dataCome') {
        return {
            ...state,
            dataCome: action.payload
        };
    }

    if (action.type === 'dataBorn') {
        return {
            ...state,
            dataBorn: action.payload
        };
    }

    if (action.type === 'dataDie') {
        return {
            ...state,
            dataDie: action.payload
        };
    }

    if (action.type === 'dataLeave') {
        return {
            ...state,
            dataLeave: action.payload
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

