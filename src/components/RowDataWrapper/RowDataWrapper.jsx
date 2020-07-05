import React from "react";
import { Line } from "react-chartjs-2";

import Header from "../Header/Header";

import Chart from "../Chart/Chart";
import "../styles.css";
class RowDataWrapper extends React.Component {
  constructor(props) {
    super(props);
    let data;
    if (props.data) {
      data = props.data;
    }
    this.state = {
      news: data,
      ylabels: data.hits.map(item => item.objectID),
      xdata: data.hits.map(item => item.points),
      hiddenIds: [],
      upvotedIds: []
    };
  }
  
  render() {
    const { news, ylabels, xdata } = this.state;
    
    return (
      <div className="mainContainer">
        
        <Header />
        
        <div className="linkWrapper">
          {/* <Link href={{ query: { page: pageId + 1 } }}>
            <a className="more" onClick={this.clickMore}>
              More
            </a>
          </Link> */}
        </div>
        <div className="graph">
          abc
        </div>
      </div>
    );
  }
}
export default RowDataWrapper;
