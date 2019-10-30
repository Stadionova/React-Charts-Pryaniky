import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import './index.css';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            data: [
                ["Year", "Килограмм", { role: "style" }],
                ["2019", 50, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["2018", 60, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                ["2017", 16, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                ["2016", 22, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["2015", 28, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
            ]
        };

        this.pushNewIdeaByButton = this.pushNewIdeaByButton.bind(this);
    }

    pushNewIdeaByButton(event) {
        this.setState({
            data: [
                ["Month", "Килограмм", { role: "style" }],
                ["January", 10, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["February", 5, "stroke-color: black; stroke-width: 1; fill-color: #76A7FA; fill-opacity: 0.5"],
                ["March", 13, "stroke-color: black; stroke-width: 1; fill-color: rgb(231, 231, 109); fill-opacity: 0.5"],
                ["April", 8, "stroke-color: black; stroke-width: 1; fill-color: #C5A5CF; fill-opacity: 0.5"],
                ["May", 19, "stroke-color: black; stroke-width: 1; fill-color: #BC5679; fill-opacity: 0.5"]
            ]
        });
    };

    render() {
        return (
            <div>
                <div className='title'>
                    <span>Количество используемых ингредиентов в пицце (по Москве)</span>
                </div>
                <div className="App">
                    <Chart chartType="BarChart" width="100%" height="400px" data={this.state.data} />
                </div>
                <div>
                    <button onClick={this.pushNewIdeaByButton.bind(this)}>По годам</button>
                </div>
                <div>
                    <button onClick={this.pushNewIdeaByButton.bind(this)}>По месяцам</button>
                </div>
                <div>
                    <button onClick={this.pushNewIdeaByButton.bind(this)}>По дням</button>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);