import React from 'react';
import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';
import './ChartPeriods.css';

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
        this.props.onChangeDataPeriod(data);
    };

    pushNewPeriodMonth = (event) => {
        const data = getDataMonth();
        this.props.onChangeDataPeriod(data);
    };

    pushNewPeriodDay = (event) => {
        const data = getDataDay();
        this.props.onChangeDataPeriod(data);
    };

}

export default ChartPeriods;