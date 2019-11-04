import React from 'react';
import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';
import './ChartPeriods.css';
import { connect } from 'react-redux';

const ChartPeriods = (props) => {

    function pushNewPeriodYear(event) {
        const data = getDataYear();
        props.showDataByPeriod(data);
    };

    function pushNewPeriodMonth(event) {
        const data = getDataMonth();
        props.showDataByPeriod(data);
    };

    function pushNewPeriodDay(event) {
        const data = getDataDay();
        props.showDataByPeriod(data);
    };

    return (
        <div className='buttonsPeriods'>
            <div>
                <button onClick={pushNewPeriodYear}>По годам</button>
            </div>
            <div>
                <button onClick={pushNewPeriodMonth}>По месяцам</button>
            </div>
            <div>
                <button onClick={pushNewPeriodDay}>По дням</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        showDataByPeriod: (data) => dispatch({ type: "changePeriod", payload: data })
    })
)(ChartPeriods);