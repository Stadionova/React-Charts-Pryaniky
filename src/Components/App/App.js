import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import { data } from '../../modules/data.js';
import ChartPeriods from '../ChartPeriods/ChartPeriods';

class App extends React.Component {

    state = {
        data: data.dataYear
    }

    render() {
        return (
            <div className='appWrap'>
                <Header />
                <div class="wrapper">
                    <div class="item1"><Chart data={this.state.data} />
                        <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} /></div>
                    <div class="item2"><Chart data={this.state.data} />
                        <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} /></div>
                    <div class="item3"><Chart data={this.state.data} />
                        <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} /></div>
                    <div class="item4"><Chart data={this.state.data} />
                        <ChartPeriods data={this.state.data} onChangeDataPeriod={this.changeDataPeriod} /></div>
                </div>
            </div>
        );
    }

    changeDataPeriod = (data) => {
        this.setState({
            data: data
        });
    };

}

export default App;
