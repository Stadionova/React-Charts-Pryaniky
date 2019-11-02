import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import { data } from '../../modules/data.js';
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
            <div>
                <Header />
                <Chart data={this.state.data} />
                <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} />
            </div>
        );
    }
}

export default App;
