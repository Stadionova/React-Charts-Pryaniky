import React from 'react';
import {
    getDataComeYear, getDataComeMonth, getDataComeDay, getDataBornYear, getDataBornMonth,
    getDataBornDay, getDataDieYear, getDataDieMonth, getDataDieDay, getDataLeaveYear, getDataLeaveMonth, getDataLeaveDay
} from '../../getFunctionPeriod';
import './ChartPeriods.css';
import { connect } from 'react-redux';

const ChartPeriods = (props) => {

    function pushNewPeriodYear() {
        if (props.type == 'dataCome') {
            const data = getDataComeYear();
            props.showComeData(data);
        }
        if (props.type == 'dataBorn') {
            const data = getDataBornYear();
            props.showBornData(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataDieYear();
            props.showDieData(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataLeaveYear();
            props.showLeaveData(data);
        }
    };

    function pushNewPeriodMonth() {
        if (props.type == 'dataCome') {
            const data = getDataComeMonth();
            props.showComeData(data);
        }
        if (props.type == 'dataBorn') {
            const data = getDataBornMonth();
            props.showBornData(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataDieMonth();
            props.showDieData(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataLeaveMonth();
            props.showLeaveData(data);
        }
    };

    function pushNewPeriodDay() {
        if (props.type == 'dataCome') {
            const data = getDataComeDay();
            props.showComeData(data);
        }
        if (props.type == 'dataBorn') {
            const data = getDataBornDay();
            props.showBornData(data);
        }
        if (props.type == 'dataDie') {
            const data = getDataDieDay();
            props.showDieData(data);
        }
        if (props.type == 'dataLeave') {
            const data = getDataLeaveDay();
            props.showLeaveData(data);
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
        showComeData: (dataCome) => dispatch({ type: "dataCome", payload: dataCome }),
        showBornData: (dataBorn) => dispatch({ type: "dataBorn", payload: dataBorn }),
        showDieData: (dataDie) => dispatch({ type: "dataDie", payload: dataDie }),
        showLeaveData: (dataLeave) => dispatch({ type: "dataLeave", payload: dataLeave })
    })
)(ChartPeriods);