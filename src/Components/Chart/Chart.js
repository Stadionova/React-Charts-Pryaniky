import React from 'react';
import GoogleChart from "react-google-charts";
import ChartTypes from '../ChartTypes/ChartTypes';
import './Chart.css';

class Chart extends React.Component {

    state = {
        chartType: 'BarChart'
    }

    render() {

        if (this.state.chartType == 'PieChart') {
            var position = 'bottom';
        } else {
            var position = 'none';
        }

        return (
            <div className="container">
                <div className="container__chart">
                    <GoogleChart
                        options={{ chartArea: { width: '50%' }, legend: { position: position } }}
                        chartType={this.state.chartType} width="1000px" height="400px" data={this.props.data} />
                </div>
                <div className="container__chartTypes">
                    <ChartTypes chartType={this.state.chartType} onChangeChart={this.changeChart} />
                </div>
            </div>
        );
    }

    changeChart = (chartType) => {
        this.setState({
            chartType: chartType
        });
    }

}

export default Chart;
