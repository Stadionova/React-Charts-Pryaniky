import React from 'react';
import GoogleChart from "react-google-charts";
import ChartTypes from '../ChartTypes/ChartTypes';

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
            <div>
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
                }} chartType={this.state.chartType} width="900px" height="400px" data={this.props.data} />
                <ChartTypes chartType={this.state.chartType} onChangeChart={this.changeChart} />
            </div>
        );
    }
}

export default Chart;
