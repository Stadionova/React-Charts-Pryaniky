import React from 'react';
import {
    getDataYear, getDataMonth, getDataDay, getDataAppear, getDataMonthAppear,
    getDataDayAppear, getDataDie, getDataMonthDie, getDataDayDie, getDataYearaway, getDataMonthaway, getDataDayaway
} from '../../getFunctionPeriod';
// import { getDataAppear, getDataMonthAppear, getDataDayAppear } from '../../appear';
// import { getDataDie, getDataMonthDie, getDataDayDie } from '../../die';
// import { getDataYearaway, getDataMonthaway, getDataDayaway } from '../../away';
import './ChartPeriods.css';
import { connect } from 'react-redux';

const ChartPeriods = (props) => {

    function pushNewPeriodYear(event) {
        if (props.type == 'appear') {
            const data = getDataYear();
            props.showDataAppear(data);
        }
        if (props.type == 'away') {
            const data = getDataYearaway();
            props.showDataAway(data);
        }
        if (props.type == 'die') {
            const data = getDataDie();
            props.showDataDie(data);
        }
        if (props.type == 'data') {
            const data = getDataYear();
            props.showDataByPeriod(data);
        }
    };

    function pushNewPeriodMonth(event) {
        if (props.type == 'appear') {
            const data = getDataMonthAppear();
            props.showDataAppear(data);
        }
        if (props.type == 'away') {
            const data = getDataMonthaway();
            props.showDataAway(data);
        }
        if (props.type == 'die') {
            const data = getDataMonthDie();
            props.showDataDie(data);
        }
        if (props.type == 'data') {
            const data = getDataMonth();
            props.showDataByPeriod(data);
        }
    };

    function pushNewPeriodDay(event) {
        if (props.type == 'appear') {
            const data = getDataDayAppear();
            props.showDataAppear(data);
        }
        if (props.type == 'away') {
            const data = getDataDayaway();
            props.showDataAway(data);
        }
        if (props.type == 'die') {
            const data = getDataDayDie();
            props.showDataDie(data);
        }
        if (props.type == 'data') {
            const data = getDataDay();
            props.showDataByPeriod(data);
        }
    };

    return (
        <div className='buttonsPeriods'>
            <div>
                <button onClick={pushNewPeriodYear} >По годам</button>
            </div>
            <div>
                <button onClick={pushNewPeriodMonth} >По месяцам</button>
            </div>
            <div>
                <button onClick={pushNewPeriodDay} >По дням</button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        data: state.data,
        appear: state.appear,
        die: state.die,
        away: state.away
    }),
    dispatch => ({
        showDataByPeriod: (data) => dispatch({ type: "changePeriod", payload: data }),
        showDataAppear: (appear) => dispatch({ type: "appear", payload: appear }),
        showDataDie: (die) => dispatch({ type: "die", payload: die }),
        showDataAway: (away) => dispatch({ type: "away", payload: away })
    })
)(ChartPeriods);