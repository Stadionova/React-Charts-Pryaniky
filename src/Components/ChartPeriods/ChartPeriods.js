import React from 'react';
import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';
import './ChartPeriods.css';
import { connect } from 'react-redux';

class ChartPeriods extends React.Component {

    render() {
        return (
            <div className='buttonsPeriods'>
                <div>
                    <button onClick={this.pushNewPeriodYear}>По годам</button>
                </div>
                <div>
                    <button onClick={this.pushNewPeriodMonth}>По месяцам</button>
                </div>
                <div>
                    <button onClick={this.pushNewPeriodDay}>По дням</button>
                </div>
            </div>
        )
    }

    pushNewPeriodYear = (event) => {
        const data = getDataYear();
        this.props.addTrack(data);
    };

    pushNewPeriodMonth = (event) => {
        const data = getDataMonth();
        this.props.addTrack(data);
    };

    pushNewPeriodDay = (event) => {
        const data = getDataDay();
        this.props.addTrack(data);
    };

}

export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        addTrack: (data) => dispatch({ type: "ADD_TRACK", payload: data })
    })
)(ChartPeriods);