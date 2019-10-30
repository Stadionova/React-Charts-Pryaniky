import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
var modules = requireAll(require.context("./modules", false, /.json$/));

class App extends React.Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    );
  }
}

export default App;
