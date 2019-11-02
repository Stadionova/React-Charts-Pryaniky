import React from 'react';
import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';
import './ChartPeriods.css';

class ChartPeriods extends React.Component {

    constructor() {

        super();

    }

    pushNewPeriodYear(event) {
        const data = getDataYear();
        this.props.onChangeDataPeriod(data);
    };

    pushNewPeriodMonth(event) {
        const data = getDataMonth();
        this.props.onChangeDataPeriod(data);
    };

    pushNewPeriodDay(event) {
        const data = getDataDay();
        this.props.onChangeDataPeriod(data);
    };

    render() {
        return (
            <div className='buttonsPeriods'>
                <div>
                    <button onClick={this.pushNewPeriodYear.bind(this)}>По годам</button>
                </div>
                <div>
                    <button onClick={this.pushNewPeriodMonth.bind(this)}>По месяцам</button>
                </div>
                <div>
                    <button onClick={this.pushNewPeriodDay.bind(this)}>По дням</button>
                </div>
            </div>
        )
    }
}

export default ChartPeriods;