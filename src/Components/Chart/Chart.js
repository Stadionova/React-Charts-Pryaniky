import React from 'react';
import GoogleChart from "react-google-charts";

class Chart extends React.Component {

    constructor() {

        super();

        this.state = {
            chartType: 'BarChart'
        };

        this.changeChart = this.changeChart.bind(this);

    }

    changeChart(event) {
        this.setState({
            chartType: event.currentTarget.name
        });
    }

    render() {
        console.log("this.state.chartType: " + this.state.chartType);
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
                <div className='main__buttons-charts'>
                    <div>
                        <span>Отобразить данные в виде другого графика</span>
                    </div>
                    <div className="main__inputs">
                        <div>
                            <input type="button" value="Pie Chart" name='PieChart' onClick={this.changeChart.bind(this)} />
                        </div>
                        <div>
                            <input type="button" value="Bar Chart" name='BarChart' onClick={this.changeChart.bind(this)} />
                        </div>
                        <div>
                            <input type="button" value="Line Chart" name='LineChart' onClick={this.changeChart.bind(this)} />
                        </div>
                        <div>
                            <input type="button" value="Area Chart" name='AreaChart' onClick={this.changeChart.bind(this)} />
                        </div>
                        <div>
                            <input type="button" value="Column Chart" name='ColumnChart' onClick={this.changeChart.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;
