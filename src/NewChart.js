// import React, { Component } from 'react';

// class NewChart extends Component {

//     constructor() {

//         super();

//         this.state = {
//             chart: ' ',
//         };

//         this.changeInputText = this.changeInputText.bind(this);
//         this.pushNewChart = this.pushNewChart.bind(this);
//     }

//     pushNewChart() {
//         const newChart = this.state.chart;
//         this.props.onAddChart(newChart);
//         this.setState({ chart: ' ' });
//     };

//     pushNewChartByButton(event) {
//         if (this.state.chart != ' ') {
//             this.pushNewChart();
//         }
//     };

//     pushNewChartByEnter(event) {
//         if (event.key === 'Enter') {
//             this.pushNewChart();
//         }
//     };

//     changeInputText(event) {
//         this.setState({ chart: event.currentTarget.value });
//     };

//     render() {
//         return (
//             <div className='createIdeasBlock'>
//                 <div className='clickButton'>
//                     <button onClick={this.pushNewChartByButton.bind(this)}>Submit new Idea</button>
//                 </div>
//                 <div className='ideaState'>
//                     Write your IDEA
//                     <div className='ideas'>}
//                         <input value={this.state.chart} onChange={this.changeInputText} onKeyPress={this.pushNewChartByEnter.bind(this)}></input>
//                     </div>
//                 </div>
//                 {this.props.data.map((item) => {
//                     return (
//                         <div className='createIdeas'>
//                             <div className='ideaColor'>
//                                 It's your IDEA
//                                 </div>
//                             <div class='idea'><div>{item}</div></div>
//                         </div>
//                     )
//                 })}
//             </div >
//         );
//     }
// }

// export default NewChart;