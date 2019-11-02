import React from 'react';
import GoogleChart from "react-google-charts";
import ChartTypes from '../ChartTypes/ChartTypes';
import './Chart.css';

class Chart extends React.Component {

    constructor() {

        super();

        this.state = {
            chartType: 'BarChart'
        };

    }

    changeChart(chartType) {
        this.setState({
            chartType: chartType
        });
    }

    render() {
        return (
            <div className="container">
                <div className="container__chart">
                    <GoogleChart
                        options={{ chartArea: { width: '50%' }, legend: { position: 'none' }, }}
                        chartType={this.state.chartType} width="1000px" height="400px" data={this.props.data} />
                </div>
                <div className="container__chartTypes">
                    <ChartTypes chartType={this.state.chartType} onChangeChart={this.changeChart.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Chart;
