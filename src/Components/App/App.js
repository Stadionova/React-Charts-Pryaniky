import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import ChartPeriods from '../ChartPeriods/ChartPeriods';
import { getDataYear, getDataAppear, getDataDie, getDataYearaway } from '../../getFunctionPeriod';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        dataCome: getDataYear(),
        dataBorn: getDataAppear(),
        dataDie: getDataDie(),
        dataLeave: getDataYearaway()
    }

    render() {
        return (
            <div className='appWrap'>
                <div className='headerComponents'>
                    <Header />
                </div>
                <div class="wrapper">
                    <div class="item1"><ChartPeriods type="dataCome" /><Chart data={this.props.dataCome} title='Количество приехавших в Москву, тыс.' /></div>
                    <div class="item2"><ChartPeriods type="dataLeave" /><Chart data={this.props.dataLeave} title='Количество уехавших из Москвы, тыс.' /></div>
                    <div class="item3"><ChartPeriods type="dataBorn" /><Chart data={this.props.dataBorn} title='Количество родившихся в Москве, тыс.' /></div>
                    <div class="item4"><ChartPeriods type="dataDie" /><Chart data={this.props.dataDie} title='Количество умерших в Москве, тыс.' /></div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        dataCome: state.dataCome,
        dataLeave: state.dataLeave,
        dataBorn: state.dataBorn,
        dataDie: state.dataDie
    })
)(App);
