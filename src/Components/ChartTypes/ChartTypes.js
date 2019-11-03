import React from 'react';
import './ChartTypes.css';

class ChartTypes extends React.Component {

    render() {
        return (
            <div className='titleTypes'>
                <div>
                    <span>Отобразить данные в виде другого графика</span>
                </div>
                <div className="inputsTypes">
                    <div>
                        <input type="button" value="Pie Chart" name='PieChart' onClick={this.changeChartType} />
                    </div>
                    <div>
                        <input type="button" value="Bar Chart" name='BarChart' onClick={this.changeChartType} />
                    </div>
                    <div>
                        <input type="button" value="Line Chart" name='LineChart' onClick={this.changeChartType} />
                    </div>
                    <div>
                        <input type="button" value="Area Chart" name='AreaChart' onClick={this.changeChartType} />
                    </div>
                    <div>
                        <input type="button" value="Column Chart" name='ColumnChart' onClick={this.changeChartType} />
                    </div>
                </div>
            </div>
        )
    }

    changeChartType = (event) => {
        const chartType = event.currentTarget.name;
        this.props.onChangeChart(chartType);
    };

}

export default ChartTypes;