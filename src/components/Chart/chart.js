import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: props.labels,
        datasets: [
          {
            label: "Upvotes",
            fill: false,
            lineTension: 0,
            backgroundColor: "red",
            borderColor: "blue",
            borderWidth: 1,
            data: props.data
          }
        ]
      }
    };
  }
  render() {
    const { chartData } = this.state;
    console.log("chart", chartData);
    console.log("labelsss", chartData.labels);
    console.log("DATA CHAFRT", chartData.datasets[0].data);
    return <Line options={{ responsive: true }} data={chartData} />;
  }
}
export default Chart;
