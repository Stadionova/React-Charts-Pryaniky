import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import './index.css';
// import data from './modules/data.json';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: [
                ["Year", "Тысяч", { role: "style" }],
                ["2019", 50, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["2018", 60, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                ["2017", 16, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                ["2016", 22, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["2015", 28, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
            ]
        };

        this.changeDataChartMonth = this.changeDataChartMonth.bind(this);
        this.changeDataChartDay = this.changeDataChartDay.bind(this);
    }

    changeDataChartYear(event) {
        {
            this.setState({
                data: [
                    ["Year", "Тысяч", { role: "style" }],
                    ["2019", 50, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                    ["2018", 60, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                    ["2017", 16, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                    ["2016", 22, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                    ["2015", 28, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
                ]
            });
        }
    };

    changeDataChartMonth(event) {
        this.setState({
            data: [
                ["Month", "Тысяч", { role: "style" }],
                ["January", 10, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["February", 5, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                ["March", 13, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                ["April", 8, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["May", 19, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
            ]
        });
    };

    changeDataChartDay(event) {
        this.setState({
            data: [
                ["Day", "Тысяч", { role: "style" }],
                ["1", 2, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["2", 4, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                ["3", 8, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                ["4", 3, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["5", 3, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
            ]
        });
    };

    render() {
        return (
            <div>
                <div className='title'>
                    <span>Количество приезжающих в Москву</span>
                </div>
                <div className="App">
                    <Chart chartType="BarChart" width="100%" height="400px" data={this.state.data} />
                </div>
                <div className='buttons'>
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
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);