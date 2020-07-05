import React from "react";
import Header from "../Header/Header";
import Chart from "../Chart/Chart";
import "../styles.css";

class Homepage extends React.Component {
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
  render(){
      const {data, labels, xdata, hiddenIds,upvotedIds }=this.state;
      console.log("server side data");
      console.log(data)
      console.log("x points data ssr");
      console.log(xdata)
      return(
          <>
          <Header />
          
          </>
      )
  }
}
export default Homepage;
