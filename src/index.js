import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import './index.css';
import { data } from './modules/data.js';
import './dataApi';
import { getDataYear, getDataMonth, getDataDay } from './dataApi';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: data.dataYear,
            chartType: 'BarChart'
        };

        this.changeDataChartYear = this.changeDataChartYear.bind(this);
        this.changeDataChartMonth = this.changeDataChartMonth.bind(this);
        this.changeDataChartDay = this.changeDataChartDay.bind(this);
        this.changeChart = this.changeChart.bind(this);
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

    changeChart(event) {
        this.setState({
            chartType: event.currentTarget.name
        });
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <div className='header__title'>
                        <span>Количество приезжающих в Москву</span>
                    </div>
                </header>
                <main className='main'>
                    <div className="main__app">
                        <div>
                            <Chart chartType={this.state.chartType} width="800px" height="400px" data={this.state.data} />
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
                    <div className='main__buttons-charts'>
                        <div>
                            <span>Отобразить данные в виде другого графика</span>
                        </div>
                        <div>
                            <ul>
                                <input type="button" value="Bar Chart" name='BarChart' onClick={this.changeChart.bind(this)} />
                                <input type="button" value="Column Chart" name='ColumnChart' onClick={this.changeChart.bind(this)} />
                                <input type="button" value="Histogram Chart" name='Histogram' onClick={this.changeChart.bind(this)} />
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





// import { createStore } from 'redux';

// // store - это хранилище всех наших данных в приложении

// function showChart(state = [], action) {
//     if (action.type === 'addChart') {
//         // здесь возвращается новый массив
//         return [
//             ...state,
//             action.chartShow
//         ];
//     }
//     return state;
// }

// const store = createStore(showChart);

// // как подписаться на изменения store

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

// store.dispatch({ type: 'addChart', chartShow: 'BarChart' });
// store.dispatch({ type: 'addChart', chartShow: 'Chart' });

// // повесим listener на кнопку, которую добавила в index.html
// const showChartBtn = document.querySelectorAll('.showChart')[0];
// showChartBtn.addEventListener('click', () => {
//     const chartName = document.querySelectorAll('.chartsInput')[0].nodeValue;
//     console.log('chartName', chartName);
// })