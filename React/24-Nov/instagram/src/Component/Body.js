import React, { Component } from "react";

import Cards from "./Cards";
import Story from "./Stories";
import "./Body.scss";

class Body extends Component {
  render() {
    return (
      <div id="Container">
        <div className="StorySection">
          <Story />
        </div>
        <div className="Post">
          <Cards />
        </div>
        <sidebar className="SidePar"></sidebar>
      </div>
    );
  }
}

export default Body;
