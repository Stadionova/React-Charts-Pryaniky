import React from 'react';
import './ChartTypes.css';

class ChartTypes extends React.Component {

    constructor() {

        super();

    }

    changeChartType(event) {
        const chartType = event.currentTarget.name;
        this.props.onChangeChart(chartType);
    };

    render() {
        return (
            <div className='titleTypes'>
                <div>
                    <span>Отобразить данные в виде другого графика</span>
                </div>
                <div className="inputsTypes">
                    <div>
                        <input type="button" value="Pie Chart" name='PieChart' onClick={this.changeChartType.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Bar Chart" name='BarChart' onClick={this.changeChartType.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Line Chart" name='LineChart' onClick={this.changeChartType.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Area Chart" name='AreaChart' onClick={this.changeChartType.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Column Chart" name='ColumnChart' onClick={this.changeChartType.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChartTypes;