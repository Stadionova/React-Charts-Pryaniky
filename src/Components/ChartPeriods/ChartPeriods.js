import React from 'react';
import {
    getDataYear, getDataMonth, getDataDay, getDataAppear, getDataMonthAppear,
    getDataDayAppear, getDataDie, getDataMonthDie, getDataDayDie, getDataYearaway, getDataMonthaway, getDataDayaway
} from '../../getFunctionPeriod';
import './ChartPeriods.css';
import { connect } from 'react-redux';

const ChartPeriods = (props) => {

    function pushNewPeriodYear(event) {
        if (props.type == 'dataBorn') {
            const data = getDataAppear();
            props.showDataAppear(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataYearaway();
            props.showDataAway(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataDie();
            props.showDataDie(data);
        }
        if (props.type == 'dataCome') {
            const data = getDataYear();
            props.showDataByPeriod(data);
        }
    };

    function pushNewPeriodMonth(event) {
        if (props.type == 'dataBorn') {
            const data = getDataMonthAppear();
            props.showDataAppear(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataMonthaway();
            props.showDataAway(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataMonthDie();
            props.showDataDie(data);
        }
        if (props.type == 'dataCome') {
            const data = getDataMonth();
            props.showDataByPeriod(data);
        }
    };

    function pushNewPeriodDay(event) {
        if (props.type == 'dataBorn') {
            const data = getDataDayAppear();
            props.showDataAppear(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataDayaway();
            props.showDataAway(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataDayDie();
            props.showDataDie(data);
        }
        if (props.type == 'dataCome') {
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
        dataCome: state.dataCome,
        dataBorn: state.dataBorn,
        dataDie: state.dataDie,
        dataLeave: state.dataLeave
    }),
    dispatch => ({
        showDataByPeriod: (dataCome) => dispatch({ type: "dataCome", payload: dataCome }),
        showDataAppear: (dataBorn) => dispatch({ type: "dataBorn", payload: dataBorn }),
        showDataDie: (dataDie) => dispatch({ type: "dataDie", payload: dataDie }),
        showDataAway: (dataLeave) => dispatch({ type: "dataLeave", payload: dataLeave })
    })
)(ChartPeriods);