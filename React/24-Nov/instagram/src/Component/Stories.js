import React, { Component } from "react";

import { Stories } from "../Data/DataPost";
//import "./Body.scss";
const UnRead = "#fd5949";
const Read = "#ccc";

class ReadStory extends Component {
  constructor(props) {
    super(props);
    this.state = { color: UnRead };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == Read ? UnRead : Read;
    this.setState({ color: newColor });
  }
}
class Story extends ReadStory {
  render() {
    return (
      <div className="Container">
        {Stories.map((story) => {
          return (
            <div className={"Stories"}>
              <a href="#">
                <div
                  className="PF_HP"
                  style={{ borderColor: this.state.color }}
                >
                  <img
                    src={story.PFImg}
                    alt=""
                    width="60px"
                    onClick={this.changeColor}
                  />
                </div>
              </a>
              <p>{story.Name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// return (
//   // Start Card
//   <div className="Container">{Stories.map(renderStory)}</div>
//   //End Card
// );

export default Story;
