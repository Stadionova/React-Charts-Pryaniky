import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import './index.css';
import { data } from './modules/data.js';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: data.dataYear
        };

        this.changeDataChartMonth = this.changeDataChartMonth.bind(this);
        this.changeDataChartDay = this.changeDataChartDay.bind(this);
    }

    changeDataChartYear(event) {
        {
            this.setState({
                data: data.dataYear
            });
        }
    };

    changeDataChartMonth(event) {
        this.setState({
            data: data.dataMonth
        });
    };

    changeDataChartDay(event) {
        this.setState({
            data: data.dataDay
        });
    };

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
                        <Chart chartType="BarChart" width="100%" height="400px" data={this.state.data} />
                    </div>
                    <div className='main__buttons'>
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
                </main>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);