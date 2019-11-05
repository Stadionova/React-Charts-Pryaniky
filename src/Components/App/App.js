import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import ChartPeriods from '../ChartPeriods/ChartPeriods';
import { getDataComeYear, getDataBornYear, getDataDieYear, getDataLeaveYear } from '../../getFunctionPeriod';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        dataCome: getDataComeYear(),
        dataBorn: getDataBornYear(),
        dataDie: getDataDieYear(),
        dataLeave: getDataLeaveYear()
    }

    render() {
        return (
            <div className='appWrap'>
                <div className='headerComponents'>
                    <Header />
                </div>
                <div class="wrapper">
                    <div className="item1"><ChartPeriods type="dataCome" /><Chart data={this.props.dataCome} title='Количество приехавших в Москву' /></div>
                    <div className="item2"><ChartPeriods type="dataLeave" /><Chart data={this.props.dataLeave} title='Количество уехавших из Москвы' /></div>
                    <div className="item3"><ChartPeriods type="dataBorn" /><Chart data={this.props.dataBorn} title='Количество родившихся в Москве' /></div>
                    <div className="item4"><ChartPeriods type="dataDie" /><Chart data={this.props.dataDie} title='Количество умерших в Москве' /></div>
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
