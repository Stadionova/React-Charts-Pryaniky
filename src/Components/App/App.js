import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import { data } from '../../modules/data.js';
// import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';
import ChartPeriods from '../ChartPeriods/ChartPeriods';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: data.dataYear
        };

        this.changeDataPeriod = this.changeDataPeriod.bind(this);

    }

    changeDataPeriod(data) {
        this.setState({
            data: data
        });
    };

    render() {
        return (
            <div className='containerApp'>
                <div className='container'>
                    <header className='header'>
                        <div className='header__title'>
                            <span>Количество приезжающих в Москву</span>
                        </div>
                    </header>
                    <main className='main'>
                        <div className="main__app">
                            <div>
                                <Chart data={this.state.data} />
                            </div>
                            <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} />
                            {/* <div className='main__buttons-periods'>
                                <div>
                                    <button onClick={this.changeDataChartYear.bind(this)}>По годам</button>
                                </div>
                                <div>
                                    <button onClick={this.changeDataChartMonth.bind(this)}>По месяцам</button>
                                </div>
                                <div>
                                    <button onClick={this.changeDataChartDay.bind(this)}>По дням</button>
                                </div>
                            </div> */}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
