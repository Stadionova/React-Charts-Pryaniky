import React from 'react';
import './ChartTypes.css';

const ChartTypes = (props) => {

    function changeChartType(event) {
        const chartType = event.currentTarget.name;
        props.onChangeChart(chartType);
    };

    return (
        <div className='titleTypes'>
            <div className="inputsTypes">
                <div>
                    <input type="button" value="Pie Chart" name='PieChart' onClick={changeChartType} />
                </div>
                <div>
                    <input type="button" value="Bar Chart" name='BarChart' onClick={changeChartType} />
                </div>
                <div>
                    <input type="button" value="Line Chart" name='LineChart' onClick={changeChartType} />
                </div>
                <div>
                    <input type="button" value="Area Chart" name='AreaChart' onClick={changeChartType} />
                </div>
                <div>
                    <input type="button" value="Column Chart" name='ColumnChart' onClick={changeChartType} />
                </div>
            </div>
        </div>
    )
}

export default ChartTypes;