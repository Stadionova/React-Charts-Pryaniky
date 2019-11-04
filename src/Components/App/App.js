import React from 'react';
import './App.css';
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import ChartPeriods from '../ChartPeriods/ChartPeriods';
import { getDataYear } from '../../dataApi';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        data: getDataYear()
    }

    render() {
        return (
            <div className='appWrap'>
                <div className='headerComponents'>
                    <Header />
                    <ChartPeriods data={this.props.data} onChangeDataPeriod={this.changeDataPeriod} />
                </div>
                <div class="wrapper">
                    <div class="item1"><Chart data={this.props.data} /></div>
                    <div class="item2"><Chart data={this.props.data} /></div>
                    <div class="item3"><Chart data={this.props.data} /></div>
                    <div class="item4"><Chart data={this.props.data} /></div>
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

export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        // addTrack: (trackName) => dispatch({ type: "ADD_TRACK", payload: trackName })
    })
)(App);
