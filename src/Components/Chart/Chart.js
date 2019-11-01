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

        this.changeChart = this.changeChart.bind(this);

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
                    <GoogleChart options={{
                        title: 'Population of Largest U.S. Cities',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City',
                        },
                        legend: { position: 'none' },
                    }} chartType={this.state.chartType} width="1000px" height="400px" data={this.props.data} />
                </div>
                <div className="container__chartTypes">
                    <ChartTypes chartType={this.state.chartType} onChangeChart={this.changeChart} />
                </div>
            </div>
        );
    }
}

export default Chart;
