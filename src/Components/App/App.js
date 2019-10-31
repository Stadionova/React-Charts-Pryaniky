import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import { data } from '../../modules/data.js';
import { getDataYear, getDataMonth, getDataDay } from '../../dataApi';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: data.dataYear
        };

        this.changeDataChartYear = this.changeDataChartYear.bind(this);
        this.changeDataChartMonth = this.changeDataChartMonth.bind(this);
        this.changeDataChartDay = this.changeDataChartDay.bind(this);
    }

    changeDataChartYear(event) {
        this.setState({
            data: getDataYear()
        });
    };

    changeDataChartMonth(event) {
        this.setState({
            data: getDataMonth()
        });
    };

    changeDataChartDay(event) {
        this.setState({
            data: getDataDay()
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
                            <div className='main__buttons-periods'>
                                <div>
                                    <button onClick={this.changeDataChartYear.bind(this)}>По годам</button>
                                </div>
                                <div>
                                    <button onClick={this.changeDataChartMonth.bind(this)}>По месяцам</button>
                                </div>
                                <div>
                                    <button onClick={this.changeDataChartDay.bind(this)}>По дням</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
