import React from 'react';

class ChartTypes extends React.Component {

    constructor() {

        super();

        this.pushNewIdea = this.pushNewIdea.bind(this);

    }

    pushNewIdea(event) {
        const chartType = event.currentTarget.name;
        this.props.onChangeChart(chartType);
    };

    render() {
        return (
            <div className='main__buttons-charts'>
                <div>
                    <span>Отобразить данные в виде другого графика</span>
                </div>
                <div className="main__inputs">
                    <div>
                        <input type="button" value="Pie Chart" name='PieChart' onClick={this.pushNewIdea.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Bar Chart" name='BarChart' onClick={this.pushNewIdea.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Line Chart" name='LineChart' onClick={this.pushNewIdea.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Area Chart" name='AreaChart' onClick={this.pushNewIdea.bind(this)} />
                    </div>
                    <div>
                        <input type="button" value="Column Chart" name='ColumnChart' onClick={this.pushNewIdea.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChartTypes;