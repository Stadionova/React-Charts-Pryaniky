import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import ChartPeriods from '../ChartPeriods/ChartPeriods';
import { getDataYear } from '../../dataApi';
import { getDataAppear } from '../../appear';
import { getDataDie } from '../../die';
import { getDataYearaway } from '../../away';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        data: getDataYear(),
        appear: getDataAppear(),
        die: getDataDie(),
        away: getDataYearaway()
    }

    render() {
        return (
            <div className='appWrap'>
                <div className='headerComponents'>
                    <Header />
                </div>
                <div class="wrapper">
                    <div class="item1"><ChartPeriods type="data" /><Chart data={this.props.data} title='Количество приезжающих в Москву, тыс.' /></div>
                    <div class="item2"><ChartPeriods type="appear" /><Chart data={this.props.appear} title='Количество уезжающих из Москвы, тыс.' /></div>
                    <div class="item3"><ChartPeriods type="die" /><Chart data={this.props.die} title='Родившиеся в Москве, тыс.' /></div>
                    <div class="item4"><ChartPeriods type="away" /><Chart data={this.props.away} title='Умершие в Москве , тыс.' /></div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state.data,
        appear: state.appear,
        die: state.die,
        away: state.away
    })
)(App);
