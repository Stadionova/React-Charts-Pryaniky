import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
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
            <div className='containerApp'>
                <div className='container'>
                    <header className='header'>
                        <div className='header__title'>
                            <span>Количество приезжающих в Москву</span>
                        </div>
                    </header>
                    <main className='main'>
                        <div className="main__app">
                            <div>
                                <Chart data={this.state.data} />
                            </div>
                            <div>
                                <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
